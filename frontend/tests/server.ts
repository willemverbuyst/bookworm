import {
  DefaultBodyType,
  PathParams,
  ResponseComposition,
  rest,
  RestContext,
  RestRequest,
} from "msw";
import { setupServer } from "msw/node";
import { beforeAll, afterEach, afterAll } from "vitest";

type Config = {
  path: string;
  method: "get" | "post" | "put" | "delete";
  res: (
    req: RestRequest<never, PathParams<string>>,
    res: ResponseComposition<DefaultBodyType>,
    ctx: RestContext
  ) => DefaultBodyType;
};

export function createServer(handlerConfig: Array<Config>) {
  const handlers = handlerConfig.map((config) => {
    return rest[config.method || "get"](
      config.path,
      (
        req: RestRequest<never, PathParams<string>>,
        res: ResponseComposition<DefaultBodyType>,
        ctx: RestContext
      ) => {
        return res(ctx.json(config.res(req, res, ctx)));
      }
    );
  });

  const server = setupServer(...handlers);

  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });
}
