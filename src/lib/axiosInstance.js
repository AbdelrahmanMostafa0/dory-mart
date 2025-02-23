const { default: axios } = require("axios");

export const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com", // Set your base URL
  timeout: 5000, // Set a timeout (in milliseconds)
  headers: {
    "Content-Type": "application/json",
  },
});
