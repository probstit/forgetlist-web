import { useState, useEffect } from "react";

import {
  ILoginState,
  IErrorState,
  FormEvent,
  ChangeEvent
} from "../interfaces";

export const useLoginValidation = (
  initialState: ILoginState,
  validate: Function,
  authenthicate: Function,
  isActivated: Function
) => {
  const [values, setValues] = useState<ILoginState>(initialState);
  const [errors, setErrors] = useState<IErrorState>({});
  const [isSubmitting, setSubmitting] = useState<boolean>(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;

      if (noErrors) {
        authenthicate();
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [
    errors,
    isSubmitting,
    values.email,
    values.password,
    authenthicate,
    isActivated
  ]);

  const handleSumbit = (e: FormEvent): void => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
  };

  const handleBlur = (): void => {
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
