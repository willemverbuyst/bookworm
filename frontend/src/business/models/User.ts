export interface User {
  address: string;
  birth_date: string;
  city: string;
  country: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  name_of_library: string;
  place_of_birth: string;
  phone: string;
  postal_code: string;
}

export interface UserApi {
  status: string;
  data: User;
  message: string;
  token: { access_token: string };
}

export interface UserState {
  user: User | null;
}
