import axios from "axios";

const BASE_URL =
  //   "https://cors-anywhere.herokuapp.com/https://fa24-102-89-44-132.ngrok-free.app/finalProject1.qa_chain/run";

  "https://fa24-102-89-44-132.ngrok-free.app/finalProject1.qa_chain/run";

export const Quilliri = async (userData: any) => {
  console.log("got here", userData);
  try {
    const response = await axios.post(`${BASE_URL}`, userData, {
      //   withCredentials: true, // Indicates whether or not cross-site Access-Control requests should be made using credentials
      // credentials: "include", // Passes cookies when making cross-origin requests
    });
    console.log(response);
    return response.data.output;
  } catch (error: any) {
    throw error;
  }
};
