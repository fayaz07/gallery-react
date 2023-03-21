import axios from "axios";
import Endpoints from "./Endpoints";

const axiosInstance = axios.create({
  baseURL: Endpoints.baseUrl,
  timeout: 10000,
});

export default axiosInstance;
