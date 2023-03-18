/* eslint-disable no-param-reassign */
import { createOvermindMock } from "overmind";
import { config } from "./index";

describe("State", () => {
  it("should derive genresOverview", async () => {
    const overmind = createOvermindMock(config, (state) => {
      state.genresApi = {
        status: "ok,",
        data: [
          {
            id: "1",
            genre: "GENRE 1",
          },
          {
            id: "2",
            genre: "GENRE 2",
          },
        ],
        message: "testing",
      };
    });

    expect(overmind.state.genresOverview).toEqual([
      {
        id: "1",
        genre: "GENRE 1",
      },
      {
        id: "2",
        genre: "GENRE 2",
      },
    ]);
  });

  it("should derive genresOverview and return null when genres api is null", async () => {
    const overmind = createOvermindMock(config, (state) => {
      state.genresApi = null;
    });

    expect(overmind.state.genresOverview).toBeNull();
  });
});
