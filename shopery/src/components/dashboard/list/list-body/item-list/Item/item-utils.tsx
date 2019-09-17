import grabToken from "../../../../../../util/grab-token";
import {
  interceptResponse,
  auth
} from "../../../../../../util/response-interceptor";
import axios from "axios";

export const deleteFromDB = async (id: string, setLoggedIn: auth) => {
  let token = grabToken();
  const url = `http://localhost:8000/api/v1.0/items/delete-item/${id}`;
  interceptResponse(setLoggedIn);
  try {
    await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  } catch (err) {
    console.log(err); // For now
  }
};

export const updateItemBoughtStatus = async (
  url: string,
  setLoggedIn: auth
) => {
  let token = grabToken();
  interceptResponse(setLoggedIn);
  axios.put(
    url,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};

export const updateItemShareStatus = async (url: string, setLoggedIn: auth) => {
  let token = grabToken();
  interceptResponse(setLoggedIn);
  try {
    const response = await axios.put(
      url,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    return response;
  } catch (err) {
    alert(err.response.data.payload.message);
  }
};
