export interface Bookworm {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  user_is_active: boolean;
  library_name: string;
}

export interface BookwormApi {
  status: string;
  result: number;
  data: Bookworm[];
  total: number;
  message: string;
}
