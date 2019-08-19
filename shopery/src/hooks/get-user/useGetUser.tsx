import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import { User } from "./interfaces";

const useGetUser = () => {
  const [user, setUser] = useState<User>({
    email: "",
    firstName: "",
    lastName: "",
    _id: ""
  });
  const [error, setError] = useState<string>("");

  const fetchUser = useCallback(async () => {
    let token = localStorage.getItem("token") as string;
    const url = "http://localhost:8000/api/v1.0/users/me";
    if (token) token = JSON.parse(token);
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setUser(res.data.user);
    } catch (err) {
      setError(err.response.data.payload.message);
    }
  }, []);

  useEffect(() => {
    console.log("rendering effect");
    fetchUser();
  }, [fetchUser]);

  return {
    user,
    error
  };
};

export default useGetUser;
