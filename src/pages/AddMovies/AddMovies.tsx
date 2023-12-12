import React, { useEffect, useState } from "react";
import { AddMoviesBackground } from "./AddMoviesStyles";
import MenuItems from "../../components/HeaderBar/MenuItems";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { Button } from "primereact/button";
import { Movie } from "../Movies/Movies";
import { addNewMovie } from "../../controller/movieController";
import Appbar from "../../components/HeaderBar/Appbar";
import { useNavigate } from "react-router-dom";

const AddMovies = () => {
  const [title, setTitle] = useState<string>("");
  const [releaseYear, setReleaseYear] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [synopsis, setSynopsis] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const [newMovie, setNewMovie] = useState<Movie>({
    title: title,
    releaseYear: releaseYear,
    genre: genre,
    rating: rating,
    synopsis: synopsis,
    image: image,
  });

  useEffect(() => {
    // Atualizar newMovie sempre que houver mudanças nos estados individuais
    setNewMovie({
      title: title,
      releaseYear: releaseYear,
      genre: genre,
      rating: rating,
      synopsis: synopsis,
      image: image,
    });
  }, [title, releaseYear, genre, rating, synopsis, image]);

  const navigate = useNavigate();
  return (
    <AddMoviesBackground>
      <Appbar />
      <div
        className="flex align-items-center justify-content-center"
        style={{ height: "100%" }}
      >
        <div>
          <div className="flex flex-column align-items-end">
            <div className="field grid">
              <label className="col-fixed">Nome do Filme:</label>
              <div className="col">
                <InputText
                  type="text"
                  className="p-inputtext-sm"
                  placeholder="Filme"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>
            <div className="field grid">
              <label className="col-fixed">Imagem:</label>
              <div className="col">
                <InputText
                  type="text"
                  className="p-inputtext-sm"
                  placeholder="Link da Imagem"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
            </div>
            <div className="field grid">
              <label className="col-fixed">Sinopse:</label>
              <div className="col">
                <InputText
                  type="text"
                  className="p-inputtext-sm"
                  placeholder="Sinopse"
                  value={synopsis}
                  onChange={(e) => setSynopsis(e.target.value)}
                />
              </div>
            </div>
            <div className="field grid">
              <label className="col-fixed">Gênero:</label>
              <div className="col">
                <InputText
                  type="text"
                  className="p-inputtext-sm"
                  placeholder="Gênero"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                />
              </div>
            </div>
            <div className="field grid">
              <label className="col-fixed">Rating:</label>
              <div className="col">
                <InputText
                  type="text"
                  className="p-inputtext-sm"
                  placeholder="Rating"
                  value={rating.toString()}
                  onChange={(e) => setRating(parseInt(e.target.value))}
                />
              </div>
            </div>
            <div className="field grid">
              <label className="col-fixed">Data de Lançamento:</label>
              <div className="col">
                <InputText
                  type="date" // Define o formato da máscara de data
                  value={releaseYear}
                  placeholder="Data de Lançamento"
                  onChange={(e) => setReleaseYear(e.target.value || "")}
                />
              </div>
            </div>
          </div>
          <div className="card flex justify-content-end">
            <Button
              label="Adicionar filme"
              onClick={() => {
                addNewMovie(newMovie);

                setTimeout(() => {
                  navigate("/filmes");
                }, 250);
              }}
            />
          </div>
        </div>
        <img
          className="ml-4"
          src={
            image
              ? image
              : "https://img.icons8.com/?size=100&id=0uYcfoG9OUaw&format=png"
          }
          alt=""
        />
      </div>
    </AddMoviesBackground>
  );
};

export default AddMovies;
