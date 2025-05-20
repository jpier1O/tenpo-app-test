import api from "./api";

export const getUsers = async () => {
  const res = await api.get("/api/?results=2000&seed=tenpo");
  return res.data.results;
};