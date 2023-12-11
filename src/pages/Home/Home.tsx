import React, { useEffect, useState } from "react";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { MenuItem } from "./styles";
import { useNavigate } from "react-router-dom";
import { animated, useSpring } from "react-spring";

interface Menu {
  title: string;
  url: string;
}

const Home = () => {
  const navigate = useNavigate();

  const dados = [
    {
      title: "Catálogo de filmes",
      url: "filmes",
    },
    {
      title: "Adicionar Filmes",
    },
    {
      title: "Lista de usuários",
    },
    {
      title: "Cadastrar usuário",
    },
  ];

  const gridItem = (movies: Menu) => {
    return (
      <div className="col-12 sm:col-6 lg:col-4 xl:col-3 p-3">
        <MenuItem
          className="border-3 surface-border border-round flex flex-column align-items-center justify-content-center"
          style={{
            padding: 50,
            height: 300,
            cursor: "pointer",
          }}
          onClick={() => (movies.url ? navigate(`/${movies.url}`) : null)}
        >
          <div className="flex flex-column align-items-center justify-content-center gap-3">
            <span
              className="text-2xl font-bold"
              style={{ textAlign: "center" }}
            >
              {movies.title}
            </span>
          </div>
        </MenuItem>
      </div>
    );
  };

  const itemTemplate = (movies: Menu, layout: string) => {
    if (!movies) {
      return;
    }

    if (layout === "grid") return gridItem(movies);
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const textProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(20)" : "translateY(0px)",
    from: { opacity: 0, transform: "translateY(0px)" },
    config: { duration: 800 },
  });

  return (
    <div
      className="card flex align-itens-center justify-content-center"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <animated.div style={textProps}>
        <h1 className="text-center mb-7">Bem-vindo à Biblioteca de Filmes</h1>
      </animated.div>
      <DataView value={dados} itemTemplate={itemTemplate} layout={"grid"} />
    </div>
  );
};

export default Home;
