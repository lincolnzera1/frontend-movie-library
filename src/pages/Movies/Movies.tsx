import { useEffect, useState } from "react";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import axios from "axios";
import "primeicons/primeicons.css";
import { Menubar } from "primereact/menubar";
import { getData } from "../../controller/movieController";
import { PostCard } from "./styles";
import ModalView from "../../components/Modal/ModalView";

export interface Movie {
  title: string;
  releaseYear: string;
  genre: string;
  rating: number;
  synopsis: string;
  image: string;
}

function Movies() {
  const [dados, setDados] = useState();
  const [visibility, setVisibility] = useState<boolean>(false);
  const [dadosModal, setDadosModal] = useState<Movie>();

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
        <PostCard
          className="p-0"
          onClick={() => {
            setVisibility(true);
            console.log("testando", visibility);
            setDadosModal(movies);
          }}
        >
          <div className="flex flex-column align-items-center gap-3">
            <img
              className=" shadow-2 border-round"
              style={{
                width: "100%",
              }}
              src={`${movies.image}`}
            />
            <div
              className="text-base sm:text-lg xl:text-lg font-semibold "
              style={{ textAlign: "center" }}
            >
              {movies.title}
            </div>
          </div>
          <div className="flex align-items-center justify-content-center">
            <span className="text-base sm:text-lg xl:text-1xl flex align-items-center justify-content-between">
              <i className="pi pi-star mr-2" style={{ fontSize: "1.2rem" }}></i>
              {movies.rating}
            </span>
          </div>
        </PostCard>
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

  const fecharModalView = () => {
    console.log("Função do pai executada!");
    setVisibility(false);
  };

  return (
    <>
      <Menubar model={items} />
      <div className="card">
        <DataView value={dados} itemTemplate={itemTemplate} layout={"grid"} />
        {visibility ? (
          <ModalView
            movie={dadosModal}
            visibilidade={visibility}
            fecharModalView={fecharModalView}
          />
        ) : null}
      </div>
    </>
  );
}

export default Movies;
