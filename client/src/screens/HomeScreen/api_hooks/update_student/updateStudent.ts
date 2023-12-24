import axios from "axios";
import { BaseUrl } from "../../../../../staging";

const updateStudent = async (id: number, data: studentprops) => {
  console.log("data", id, data);
  let response = false;
  try {
    let res = await axios.put(`${BaseUrl}/update/${id}`, data, {
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

export default updateStudent;
