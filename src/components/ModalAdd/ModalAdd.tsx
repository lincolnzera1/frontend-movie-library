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
} from "../ModalEdit/ModalEditStyles";

interface ModalEditProps {
  movie?: Movie;
  visibilidade?: boolean;
  fecharModalAdd: () => void;
}

const ModalAdd: React.FC<ModalEditProps> = ({
  movie,
  visibilidade,
  fecharModalAdd,
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

  return (
    <ModalEditBackground className="card flex justify-content-center">
      <DialogCustom
        draggable={false}
        dismissableMask
        header="Detalhes do filme"
        visible={visibilidade}
        onHide={() => {
          fecharModalAdd();
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
              <p className="flex align-items-center gap-1">
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
                <strong className="mr-1">Rating: </strong>
                <InputText
                  type="number"
                  className="p-inputtext-sm"
                  value={rating.toString()}
                  onChange={(e) => setRating(parseInt(e.target.value))}
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
            </div>
          </CardChild>
        </CardCustom>
        <div className="card flex justify-content-end">
          <Button
            label="Editar"
            onClick={() => {
              console.log("seus dados agora: ", newMovie);
              updateMovie(newMovie!, movie!.id!);
              setTimeout(() => {
                window.location.reload();
              }, 250);
            }}
          />
        </div>
      </DialogCustom>
    </ModalEditBackground>
  );
};

export default ModalAdd;
