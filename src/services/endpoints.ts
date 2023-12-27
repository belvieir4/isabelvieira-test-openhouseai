import { instance } from "./instance";
import { Community, Home } from "./types";

export const getAllCommunities = async () => {
  const response = await instance.get<Community[]>("/communities");
  return response.data;
};

export const getAllHouses = async () => {
  const response = await instance.get<Home[]>("/homes");
  return response.data;
};
