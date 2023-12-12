import axios from "axios";
import { Movie } from "../pages/Movies/Movies";

export const getData = async () => {
  try {
    const response = await axios.get("http://localhost:8080/movie");
    return response.data.slice(0, response.data.length);
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
};

export const getSpecificMovie = async (search: string) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/movie?title=${search}`
    );
    return response.data.slice(0, response.data.length);
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
};

export const updateMovie = async (movie: Movie, id: number) => {
  try {
    await axios.put(`http://localhost:8080/movie/${id}`, movie);
    console.log("deu certo");
  } catch (error) {
    console.error("Error updating movie:", error);
  }
};

export const deleteMovie = async (id: number) => {
  try {
    const response = await axios.delete(`http://localhost:8080/movie/${id}`);

    // Verifica se a requisição foi bem-sucedida
    if (response.status === 200) {
      console.log(`Filme com ID ${id} excluído com sucesso.`);
    }
  } catch (error) {
    console.error("Erro ao excluir o filme:", error);
  }
};

export const addNewMovie = async (newMovie: Movie) => {
  try {
    const response = await axios.post("http://localhost:8080/movie", newMovie);
    console.log("Novo filme adicionado com sucesso:", response.data);
  } catch (error) {
    console.error("Erro ao adicionar novo filme:", error);
  }
};
