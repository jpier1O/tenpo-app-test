import api from "./api";

export const getUsers = async (page: number = 1) => {
  try {
    const res = await api.get(`/api/?results=100&seed=tenpo&page=${page}`);
    return res.data.results;
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    throw new Error("Error al obtener los usuarios");
  }
};
