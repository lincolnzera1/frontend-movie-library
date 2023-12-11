import axios from "axios";
import { Movie } from "../pages/Movies/Movies";
import { UserInterface } from "../pages/Users/Users";

export const getUserList = async () => {
  try {
    const response = await axios.get("http://localhost:8080/user");
    return response.data.slice(0, response.data.length);
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
};

export const updateUser = async (movie: UserInterface, id: number) => {
  try {
    await axios.put(`http://localhost:8080/user/${id}`, movie);
    console.log("deu certo");
  } catch (error) {
    console.error("Error updating movie:", error);
  }
};

export const deleteUser = async (id: number) => {
  try {
    const response = await axios.delete(`http://localhost:8080/user/${id}`);

    // Verifica se a requisição foi bem-sucedida
    if (response.status === 200) {
      console.log(`Filme com ID ${id} excluído com sucesso.`);
    }
  } catch (error) {
    console.error("Erro ao excluir o filme:", error);
  }
};

export const addNewUser = async (newMovie: UserInterface) => {
  try {
    const response = await axios.post("http://localhost:8080/user", newMovie);
    console.log("Novo filme adicionado com sucesso:", response.data);
  } catch (error) {
    console.error("Erro ao adicionar novo filme:", error);
  }
};

export const loginUser = async (user: UserInterface) => {
  try {
    const response = await axios.post("http://localhost:8080/user/login", user);
    localStorage.setItem("username", user.username!);
    setTimeout(() => {
      window.location.reload();
    }, 250);
  } catch (error) {
    console.error("Erro ao logar usuario: ", error);
  }
};
