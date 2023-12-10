import { useEffect, useState } from "react";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import axios from "axios";
import "primeicons/primeicons.css";
import { Menubar } from "primereact/menubar";
import { getData } from "../../controller/movieController";

interface Movie {
  title: string;
  releaseYear: string;
  genre: string;
  rating: number;
  synopsis: string;
  image: string;
}

function Movies() {
  const [dados, setDados] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await getData();
        setDados(movies);
        console.log("Seus dados: ", movies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchData();
  }, []);

  const gridItem = (movies: Movie) => {
    return (
      <div className="col-12 sm:col-6 lg:col-4 xl:col-2 p-3">
        <div className="p-0">
          <div className="flex flex-column align-items-center gap-3">
            <img
              className=" shadow-2 border-round"
              style={{
                width: "100%",
              }}
              src={`${movies.image}`}
            />
            <div className="text-2xl font-bold" style={{ textAlign: "center" }}>
              {movies.title}
            </div>
          </div>
          <div className="flex align-items-center justify-content-center">
            <span className="text-2xl flex align-items-center justify-content-between">
              <i className="pi pi-star mr-2" style={{ fontSize: "1.2rem" }}></i>
              {movies.rating}
            </span>
          </div>
        </div>
      </div>
    );
  };

  const itemTemplate = (movies: Movie, layout: string) => {
    if (!movies) {
      return;
    }

    if (layout === "grid") return gridItem(movies);
  };

  const items = [
    {
      label: "Filmes",
      icon: "pi pi-fw pi-file",
      items: [
        {
          label: "Adicionar filme",
          icon: "pi pi-fw pi-plus",
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-trash",
        },
        {
          separator: true,
        },
        {
          label: "Export",
          icon: "pi pi-fw pi-external-link",
        },
      ],
    },
  ];

  return (
    <>
      <Menubar model={items} />
      <div className="card">
        <DataView value={dados} itemTemplate={itemTemplate} layout={"grid"} />
      </div>
    </>
  );
}

export default Movies;
