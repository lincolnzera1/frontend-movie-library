import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Movie } from "../../pages/Movies/Movies";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { updateMovie } from "../../controller/movieController";
import {
  CardChild,
  CardCustom,
  DialogCustom,
  ModalEditBackground,
} from "./ModalEditStyles";
import { Divider } from "primereact/divider";
import {
  addNewRating,
  getRatingByUserIdAndMovieId,
  updateRatingValue,
} from "../../controller/ratingController";

interface ModalEditProps {
  movie?: Movie;
  visibilidade?: boolean;
  fecharModalEdit: () => void;
}

export interface RatingObject {
  id?: string; // ou o tipo correto para o ID, como number ou outro
  ratingValue: string; // ou o tipo correto para o valor da avaliação
}

const ModalEdit: React.FC<ModalEditProps> = ({
  movie,
  visibilidade,
  fecharModalEdit,
}) => {
  const data = new Date(movie!.releaseYear);

  const [genre, setGenre] = useState<string>(movie!.genre);
  const [title, setTitle] = useState<string>(movie!.title);
  const [synopsis, setSynopsis] = useState<string>(movie!.synopsis);
  const [rating, setRating] = useState<number>(movie!.rating);
  const [releaseYear, setReleaseYear] = useState<string>(movie!.releaseYear);
  const [image, setImage] = useState<string>(movie!.image);

  const [newMovie, setNewMovie] = useState<Movie>({
    title: title,
    releaseYear: releaseYear,
    genre: genre,
    rating: rating,
    synopsis: synopsis,
    image: image,
  });

  const formatarData = (dataString: string): string => {
    const data = new Date(dataString);
    const dia = data.getUTCDate();
    const mes = data.getUTCMonth() + 1;
    const ano = data.getUTCFullYear();

    return `${ano}-${mes.toString().padStart(2, "0")}-${dia
      .toString()
      .padStart(2, "0")}`;
  };

  console.log(formatarData(movie!.releaseYear));

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

  const [userRating, setUserRating] = useState<RatingObject>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = parseInt(localStorage.getItem("userId")!);
        const movieId = movie!.id!;

        const rating = await getRatingByUserIdAndMovieId(userId, movieId);
        setUserRating({ id: rating.id, ratingValue: rating.ratingValue });
      } catch (error) {
        console.error("Erro ao obter o rating:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ModalEditBackground className="card flex justify-content-center">
      <DialogCustom
        draggable={false}
        dismissableMask
        header={
          <div className="flex align-items-center">
            <Button
              icon="pi pi-file-edit"
              className="p-button-rounded bg-green-500 mr-1"
              disabled
            ></Button>
            Editar filme
          </div>
        }
        visible={visibilidade}
        onHide={() => {
          fecharModalEdit();
        }}
        // style={{  minWidth: "553px", }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
      >
        <CardCustom
          title={
            <div>
              <strong className="text-lg">Filme: </strong>
              <InputText
                type="text"
                placeholder="title"
                className="p-inputtext-sm"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          }
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            minWidth: "560px",
          }}
        >
          <CardChild className="flex align-items-center justify-content-center gap-3">
            <img
              className=""
              style={{
                height: 400,
              }}
              src={movie?.image}
            />
            <div>
              <p className="flex align-items-center  gap-1">
                <strong>Sinopse</strong>:
                <InputTextarea
                  autoResize
                  value={synopsis}
                  onChange={(e) => setSynopsis(e.target.value)}
                  rows={5}
                  cols={30}
                />
              </p>
              <p className="flex align-items-center gap-2">
                <strong>Gênero: </strong>
                <InputText
                  type="text"
                  className="p-inputtext-sm"
                  placeholder="Small"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                />
              </p>

              <p>
                <strong>Data de lançamento:</strong>{" "}
                <InputText
                  type="date"
                  className="p-inputtext-sm"
                  value={formatarData(releaseYear)}
                  onChange={(e) => setReleaseYear(e.target.value)}
                />
              </p>
              <p className="">
                <i
                  className="pi pi-star mr-2"
                  style={{ fontSize: "1.2rem" }}
                ></i>
                <strong className="mr-1">Rating imdb: </strong>
                <InputText
                  type="number"
                  className="p-inputtext-sm"
                  value={rating.toString()}
                  onChange={(e) => setRating(parseInt(e.target.value))}
                />
              </p>
              <p>
                <i
                  className="pi pi-star mr-2"
                  style={{ fontSize: "1.2rem" }}
                ></i>
                <strong className="mr-1">Rating do usuário: </strong>
                <InputText
                  type="number"
                  className="p-inputtext-sm"
                  value={userRating?.ratingValue.toString()}
                  onChange={(e) => {
                    setUserRating({
                      // id: userRating!.id,
                      ratingValue: e.target.value,
                    });
                    // console.log("valor de: ", userRating?.ratingValue);
                  }}
                />
              </p>
              <div>
                <strong className="mr-1">Trocar link da imagem: </strong>
                <InputText
                  type="text"
                  className="p-inputtext-sm"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <Divider />

              <div className="card flex justify-content-center">
                <Button
                  label="Editar"
                  className="bg-green-500"
                  onClick={() => {
                    console.log("seus dados agora: ", newMovie);
                    updateMovie(newMovie!, movie!.id!);
                    console.log(
                      "meu id de usuario: ",
                      parseInt(localStorage.getItem("userId")!)
                    );
                    console.log("meu id de Filme: ", movie!.id!);

                    userRating?.id !== undefined
                      ? updateRatingValue(
                          parseInt(userRating!.id!),
                          parseInt(userRating!.ratingValue!)
                        )
                      : addNewRating({
                          user: {
                            id: parseInt(localStorage.getItem("userId")!),
                          },
                          movie: {
                            id: movie!.id!,
                          },
                          ratingValue: parseInt(userRating!.ratingValue!),
                        });

                    setTimeout(() => {
                      window.location.reload();
                    }, 250);
                  }}
                />
              </div>
            </div>
          </CardChild>
        </CardCustom>
      </DialogCustom>
    </ModalEditBackground>
  );
};

export default ModalEdit;
