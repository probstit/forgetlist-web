export interface IRegisterState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ILoginState {
  email: string;
  password: string;
}

export interface IErrorState {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}
