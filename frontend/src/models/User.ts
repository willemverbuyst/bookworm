export interface User {
  id: string;
  userName: string;
  email: string;
}

export interface UserApi {
  status: string;
  data: User;
  message: string;
}
