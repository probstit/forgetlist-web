import { useState, useEffect } from "react";

type FormEvent = React.FormEvent<HTMLFormElement>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

interface IRegisterState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface IErrorsState {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

const useForm = (validate: Function) => {
  // State for controlling inputs
  const [values, setValues] = useState<IRegisterState>({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  // State for validating errors
  const [errors, setErrors] = useState<IErrorsState>({});

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Handlers
  const handleChange = (e: ChangeEvent): void => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const { firstName, lastName, email, password } = values;
    setValues({
      ...values,
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    });
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    // checks to see if there are no errors
    // if !errors call cb()
    if (Object.keys(errors).length === 0 && isSubmitting) {
      console.log("test");
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};

export default useForm;
