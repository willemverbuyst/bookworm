export interface ApiState {
  response: {
    statusText?: string;
    message: string;
    status: "success" | "error" | undefined;
  };
}

export const state: ApiState = {
  response: {
    statusText: "",
    message: "",
    status: undefined,
  },
};
