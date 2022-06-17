import { User } from '../models/user.model';

export interface Login {
  email: string;
  password: string;
}

export interface DataLogin {
  ok: boolean;
  token: string;
}

export interface userData {
  ok: boolean;
  user: User;
  token: string;
}
