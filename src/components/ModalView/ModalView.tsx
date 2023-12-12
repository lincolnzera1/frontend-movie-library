import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Movie } from "../../pages/Movies/Movies";
import { Card } from "primereact/card";
import { getRatingByUserIdAndMovieId } from "../../controller/ratingController";
import { RatingObject } from "../ModalEdit/ModalEdit";

interface ModalViewProps {
  movie?: Movie;
  visibilidade?: boolean;
  fecharModalView: () => void;
}

const ModalView: React.FC<ModalViewProps> = ({
  movie,
  visibilidade,
  fecharModalView,
}) => {
  console.log("nossos dados: ", movie?.title);

  const data = new Date(movie!.releaseYear);
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
    <div className="card flex justify-content-center">
      <Dialog
        draggable={false}
        dismissableMask
        header="Detalhes do filme"
        visible={visibilidade}
        onHide={() => {
          fecharModalView();
        }}
        style={{ width: "50vw" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
      >
        <Card
          title={movie?.title}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            minWidth: "560px",
          }}
        >
          <div className="flex align-items-start justify-content-center gap-3">
            <img
              className=""
              style={{
                height: 400,
              }}
              src={movie?.image}
              alt=""
            />
            <div>
              <p className="">
                <strong>Sinopse</strong>: {movie?.synopsis}
              </p>
              <p>
                <strong>Gênero:</strong> {movie?.genre}
              </p>
              <p>
                <strong>Data de lançamento:</strong> {data.getDate()}/
                {data.getMonth()}/{data.getFullYear()}
              </p>
              <p className="flex">
                <i
                  className="pi pi-star mr-2"
                  style={{ fontSize: "1.2rem" }}
                ></i>
                <strong className="mr-1">Rating imdb: </strong> {movie?.rating}/10
              </p>
              <p className="flex">
                <i
                  className="pi pi-star mr-2"
                  style={{ fontSize: "1.2rem" }}
                ></i>
                <strong className="mr-1">
                  Rating do usuário:{userRating?.ratingValue}{" "}
                  {localStorage.getItem("username") ? null : "Logue para avaliar"}
                </strong>{" "}
              </p>
            </div>
          </div>
        </Card>
      </Dialog>
    </div>
  );
};

export default ModalView;
