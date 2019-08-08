import { useState, useEffect } from "react";

import {
  IRegisterState,
  IErrorState,
  FormEvent,
  ChangeEvent
} from "../interfaces";

export const useRegisterValidation = (
  initialState: IRegisterState,
  validate: Function,
  registerUser: Function
) => {
  const [values, setValues] = useState<IRegisterState>(initialState);
  const [errors, setErrors] = useState<IErrorState>({});
  const [isSubmitting, setSubmitting] = useState<boolean>(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;

      if (noErrors) {
        registerUser();
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [
    errors,
    isSubmitting,
    values.firstName,
    values.lastName,
    values.email,
    values.password
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
