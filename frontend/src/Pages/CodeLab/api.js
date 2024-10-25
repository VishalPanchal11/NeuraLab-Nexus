import axios from "axios";
import { LANGUAGE_VERSIONS } from "./constants";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (language, sourceCode) => {
  try {
    const response = await API.post("/execute", {
      language: language,
      version: LANGUAGE_VERSIONS[language],
      files: [
        {
          content: sourceCode,
        },
      ],
    });
    console.log(response.data);
    return response.data; // Ensure that your output structure matches expected
  } catch (error) {
    console.error("Error executing code:", error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};
