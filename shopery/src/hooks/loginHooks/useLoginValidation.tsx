import { useState, useEffect } from "react";

import { ILoginState, IErrorState } from "../interfaces";

type FormEvent = React.FormEvent<HTMLFormElement>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
type FocusEvent = React.FocusEvent<HTMLInputElement>;

export const useLoginValidation = (
  initialState: ILoginState,
  validate: Function
) => {
  const [values, setValues] = useState<ILoginState>(initialState);
  const [errors, setErrors] = useState<IErrorState>({});
  const [isSubmitting, setSubmitting] = useState<boolean>(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;

      if (noErrors) {
        console.log(`Authethicated: 
        email : ${values.email}
        password : ${values.password}
      `);
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors, isSubmitting, values.email, values.password]);

  const handleSumbit = (e: FormEvent): void => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
  };

  const handleBlur = (e: FocusEvent): void => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  const handleChange = (e: ChangeEvent): void => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    });
  };

  return {
    values,
    handleChange,
    handleSumbit,
    handleBlur,
    errors,
    isSubmitting
  };
};
