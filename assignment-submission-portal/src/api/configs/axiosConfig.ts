import axios from "axios";
import { api } from "../consts.ts/apiHosts";

export const axiosConfig = axios.create({
  baseURL: api.host,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});
