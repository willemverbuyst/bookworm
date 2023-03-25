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
  data: Bookworm[];
  message: string;
  result: number;
  total_number_of_bookworms: number;
}
