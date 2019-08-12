export interface ErrorState {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

export interface FormState {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

export type FormEvent = React.FormEvent<HTMLFormElement>;
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
