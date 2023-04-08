export interface ApiResponseBase<T> {
  status: string;
  data: T;
  message: string;
}
export interface GetAllApiResponse<T> extends ApiResponseBase<T> {
  result: number;
  total: number;
}
