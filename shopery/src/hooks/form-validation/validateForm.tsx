import { FormState, ErrorState } from "./interfaces";

export default function validateForm(values: FormState) {
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
  const { firstName, lastName, email, password } = values;

  let errors: ErrorState = {};

  if (values.hasOwnProperty("firstName")) {
    if (!firstName) {
      errors.firstName = "First name is required";
    }
  }

  if (values.hasOwnProperty("lastName")) {
    if (!lastName) {
      errors.lastName = "Last name is required";
    }
  }

  if (values.hasOwnProperty("email")) {
    if (!email) {
      errors.email = "E-mail is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid e-mail";
    }
  }

  if (values.hasOwnProperty("password")) {
    if (!password || password.trim().length === 0) {
      errors.password = "Password is required";
    } else if (password.length < 6 || password.trim().length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
  }

  return errors;
}
