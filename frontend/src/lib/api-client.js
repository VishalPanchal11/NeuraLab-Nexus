import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://localhost:6969",
  withCredentials: true,
});