export interface Login {
  email: string;
  password: string;
}

export interface DataLogin {
  ok: boolean;
  token: string;
}

export interface Register {
  email: string;
  password: string;
}

export interface DataRegister {
  ok: boolean;
  token: string;
}
