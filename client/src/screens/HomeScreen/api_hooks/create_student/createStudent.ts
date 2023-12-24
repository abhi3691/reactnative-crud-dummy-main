import axios from "axios";
import { BaseUrl } from "../../../../../staging";

const createStudent = async (data: studentprops) => {
  let response = false;
  try {
    let res = await axios.post(`${BaseUrl}/create`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = res?.data;
  } catch (err) {
    console.log("err", err);
    response = false;
  }
  return response;
};

export default createStudent;
