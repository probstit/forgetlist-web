import axios from "axios";

export type auth = React.Dispatch<React.SetStateAction<boolean>>;

export function interceptResponse(setLoggedIn: auth) {
  axios.interceptors.response.use(
    response => response,
    error => {
      const { status } = error.response;
      if (status === 401) {
        localStorage.removeItem("token");
        setLoggedIn(false);
      }
    }
  );
}
