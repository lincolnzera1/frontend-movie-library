// Importe o hook useNavigate dentro do componente funcional
import { useNavigate } from "react-router-dom";

const MenuItems = () => {
  const navigate = useNavigate(); // Chame o hook dentro do componente funcional

  const items = [
    {
      label: "Início",
      icon: "pi pi-fw pi-user",
      command: () => navigate("/"),
    },
    {
      label: "Catálogo de filmes",
      icon: "pi pi-fw pi-align-center",
      command: () => navigate("/filmes"),
    },
    {
      label: "Adicionar Filmes",
      icon: "pi pi-fw pi-plus",
      command: () => navigate("/filmes/adicionar"),
    },
    {
      label: "Lista de usuários",
      icon: "pi pi-fw pi-align-center",
      command: () => navigate("/usuarios"),
    },
    {
      label: "Cadastrar usuário",
      icon: "pi pi-fw pi-plus",
      command: () => navigate("/usuarios/adicionar"),
    },
  ];

  return items;
};

export default MenuItems;
