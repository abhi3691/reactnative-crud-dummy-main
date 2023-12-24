import axios from "axios";
import { BaseUrl } from "../../../../../staging";

const getAllStudents = async () => {
  let response = false;
  try {
    let res = await axios.get(`${BaseUrl}/students`, {
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

export default getAllStudents;
