import api from "./api";

export const getUsers = async () => {
  try {
    const res = await api.get("/api/?results=2000&seed=tenpo");
    return res.data.results;
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    throw new Error("Error al obtener los usuarios");
  }
};
