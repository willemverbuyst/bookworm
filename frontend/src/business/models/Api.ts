export interface ApiResponse {
  statusText?: string;
  message: string;
  status: "success" | "error" | undefined;
}
