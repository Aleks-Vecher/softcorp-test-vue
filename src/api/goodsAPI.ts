import { localApi } from "./configs";
import type { AxiosResponse } from "axios";

const API_GOODS = new URL("../../data.json", import.meta.url).toString();
const API_GOODS_NAME = new URL("../../name.json", import.meta.url).toString();

export const getAll = async () => {
  const response: AxiosResponse<string> = await localApi.get(API_GOODS);
  return response.data;
};

export const getAllNames = async () => {
  const response: AxiosResponse<string> = await localApi.get(API_GOODS_NAME);
  return response.data;
};
