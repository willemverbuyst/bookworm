export interface ApiResponse<T> {
  status: string;
  result: number;
  data: Array<T>;
  total: number;
  message: string;
}
