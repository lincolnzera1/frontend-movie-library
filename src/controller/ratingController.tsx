import axios from "axios";

interface RatingData {
  user: {
    id: number; // ou id: bigint; se você estiver usando BigInt para IDs longos
  };
  movie: {
    id: number; // ou id: bigint; se você estiver usando BigInt para IDs longos
  };
  ratingValue: number;
}

export default RatingData;

export const addNewRating = async (newRating: RatingData) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/ratings",
      newRating
    );
    console.log("Nova avaliação registrada com sucesso:", response.data);
  } catch (error) {
    console.error("Erro ao adicionar nova avaliação:", error);
  }
};

export const updateRatingValue = async (id: number, newRatingValue: number) => {
    try {
      const response = await axios.patch(`http://localhost:8080/ratings/${id}`, {
        newRatingValue: newRatingValue,
      });
      console.log("Valor do rating atualizado com sucesso:", response.data);
    } catch (error) {
      console.error("Erro ao atualizar o valor do rating:", error);
    }
  };

export const getRatingByUserIdAndMovieId = async (
  userId: number,
  movieId: number
) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/ratings/user/${userId}/movie/${movieId}`
    );
    console.log("Rating obtido com sucesso:", response.data);
    return response.data; // ou faça algo com os dados obtidos
  } catch (error) {
    console.error("Erro ao obter o rating:", error);
    // lide com o erro conforme necessário
  }
};
