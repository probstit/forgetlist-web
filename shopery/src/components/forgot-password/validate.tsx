export default function validate(email: string) {
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
  let error: string = "";

  if (!email) {
    error = "Email is required";
  } else if (!emailRegex.test(email)) {
    error = "Invalid Email";
  }

  return error;
}
