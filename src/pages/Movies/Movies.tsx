import { useEffect, useState } from "react";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import axios from "axios";
import "primeicons/primeicons.css";
import { Menubar } from "primereact/menubar";
import {
  deleteMovie,
  getData,
  getSpecificMovie,
} from "../../controller/movieController";
import { PostCard } from "./styles";
import ModalView from "../../components/ModalView/ModalView";
import { Button } from "primereact/button";
import ModalEdit from "../../components/ModalEdit/ModalEdit";
import ModalAdd from "../../components/ModalAdd/ModalAdd";
import MenuItems from "../../components/HeaderBar/MenuItems";
import Appbar from "../../components/HeaderBar/Appbar";
import { InputText } from "primereact/inputtext";
import { useLocation } from "react-router-dom";

export interface Movie {
  id?: number;
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
  const [visibilityEdition, setVisibilityEdition] = useState<boolean>(false);
  const [visibilityAdd, setVisibilityAdd] = useState<boolean>(false);
  const [dadosModal, setDadosModal] = useState<Movie>();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await getData();
        setDados(movies);
        location.state !== null
          ? setVisibilityEdition(true)
          : setVisibilityEdition(false);
        location.state !== null
          ? setDadosModal(movies[0])
          : setVisibilityEdition(false);

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
            <PostCard
              className=" shadow-2 border-round"
              style={{
                width: "100%",
              }}
              src={movies.image}
              onClick={() => {
                setVisibility(true);
                setDadosModal(movies);
              }}
            />
            <div
              className="text-base sm:text-lg xl:text-lg font-semibold "
              style={{ textAlign: "center" }}
            >
              {movies.title}
            </div>
          </div>
          <div className="flex align-items-center justify-content-between">
            <Button
                style={{
                    border: 0
                }}
              icon="pi pi-trash"
              className="bg-transparent"
              disabled
            ></Button>
            <span className="text-base sm:text-lg xl:text-1xl flex align-items-center justify-content-between">
              <i className="pi pi-star mr-2" style={{ fontSize: "1.2rem" }}></i>
              {movies.rating}
            </span>
            <Button
              icon="pi pi-file-edit"
              className="p-button-rounded bg-green-500"
              onClick={() => {
                setDadosModal(movies);
                setVisibilityEdition(true);
                localStorage.setItem("movieId", movies.id!.toString());
              }}
            ></Button>
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

  const fecharModalView = () => {
    setVisibility(false);
  };

  const fecharModalEdit = () => {
    setVisibilityEdition(false);
    window.history.replaceState({}, document.title);
  };

  const fecharModalAdd = () => {
    setVisibilityAdd(false);
  };

  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Use async/await to wait for the result of the asynchronous function
    const specificMovies = await getSpecificMovie(value);

    // Update the state with the result
    setDados(specificMovies);
  };

  return (
    <>
      <Appbar />
      <div className="card">
        <DataView
          value={dados}
          itemTemplate={itemTemplate}
          layout={"grid"}
          header={
            <InputText
              type="text"
              placeholder="Pesquisar filme"
              onChange={handleSearchChange}
            />
          }
        />
        {visibility ? (
          <ModalView
            movie={dadosModal}
            visibilidade={visibility}
            fecharModalView={fecharModalView}
          />
        ) : null}

        {visibilityEdition ? (
          <ModalEdit
            movie={dadosModal}
            visibilidade={visibilityEdition}
            fecharModalEdit={fecharModalEdit}
          />
        ) : null}

        {visibilityAdd ? (
          <ModalAdd
            movie={dadosModal}
            visibilidade={visibilityAdd}
            fecharModalAdd={fecharModalAdd}
          />
        ) : null}
      </div>
    </>
  );
}

export default Movies;
