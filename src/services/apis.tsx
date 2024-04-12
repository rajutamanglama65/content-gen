import axios from "axios";

const baseUrl = "https://6vg60bqm-8000.inc1.devtunnels.ms";

export const generateTopicFromURL = async (url: any) => {
  try {
    const response = await axios.post(`${baseUrl}/generateTopicsFromURL`, url);

    return response.data;
  } catch (error: any) {
    return error.response.data.msg;
  }
};

export const generateTopicsFromFile = async (file: any) => {
  try {
    const response = await axios.post(
      `${baseUrl}/generateTopicsFromFile`,
      file
    );

    return response.data;
  } catch (error: any) {
    return error.response.data.msg;
  }
};

export const generateContent = async (topic: any) => {
  try {
    const response = await axios.post(`${baseUrl}/generateContent`, topic);

    return response.data;
  } catch (error: any) {
    return error.response.data.msg;
  }
};

// export default {
//   generateTopicFromURL,
//   generateTopicsFromFile,
//   generateContent,
// };
