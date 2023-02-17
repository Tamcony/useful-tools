import axios from "axios";
import qs from "qs";
import { message as $message } from "ant-design-vue";

export interface RequestOptions {
  isGetDataDirectly?: boolean;
  successMsg?: string;
  errorMsg?: string;
}

const UNKNOWN_ERROR = "网络错误，请稍后重试";
const service = axios.create({
  baseURL: "/api",
  timeout: 10000,
});

export default service;
