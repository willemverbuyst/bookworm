import axios, { AxiosError } from "axios";
import { z, ZodType } from "zod";

export const axiosGet = async ({ url }: { url: string }) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error(JSON.stringify(error.response));
      return error;
    }
    console.error(JSON.stringify(error));
    return null;
  }
};

export const axiosGetWithZod = async <T extends ZodType>({
  url,
  schema,
}: {
  url: string;
  schema: T;
}): Promise<z.infer<T>> => {
  try {
    const response = await axios.get(url);
    schema.parse(response.data);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error(JSON.stringify(error.response));
      return error;
    }
    console.error(JSON.stringify(error));
    return null;
  }
};

export const axiosPost = async ({
  url,
  token,
  body,
}: {
  url: string;
  token: string;
  body: Record<string, unknown>;
}) => {
  try {
    const response = await axios.post(url, body, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error(JSON.stringify(error.response));
      return error;
    }
    console.error(JSON.stringify(error));
    return null;
  }
};

export const axiosDelete = async ({ url }: { url: string }) => {
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error(JSON.stringify(error.response));
      return error;
    }
    console.error(JSON.stringify(error));
    return null;
  }
};

export const axiosPut = async ({
  url,
  token,
  body,
}: {
  url: string;
  token: string;
  body: Record<string, unknown>;
}) => {
  try {
    const response = await axios.put(url, body, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error(JSON.stringify(error.response));
      return error;
    }
    console.error(JSON.stringify(error));
    return null;
  }
};
