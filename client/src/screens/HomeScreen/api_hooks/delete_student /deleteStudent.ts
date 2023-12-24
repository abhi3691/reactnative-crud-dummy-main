import axios from "axios";
import { BaseUrl } from "../../../../../staging";

const deleteStudent = async (id: number) => {
  let response = false;
  try {
    let res = await axios.delete(`${BaseUrl}/delete/${id}`, {
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

export default deleteStudent;
