import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Movie } from "../../pages/Movies/Movies";
import { Card } from "primereact/card";

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
                <strong className="mr-1">Rating: </strong> {movie?.rating}/10
              </p>
            </div>
          </div>
        </Card>
      </Dialog>
    </div>
  );
};

export default ModalView;
