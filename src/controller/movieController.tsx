import axios from "axios";

export const getData = async () => {
  try {
    const response = await axios.get("http://localhost:8080/movie");
    return response.data.slice(0, response.data.length);
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
};
