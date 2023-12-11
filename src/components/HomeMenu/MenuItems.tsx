// Importe o hook useNavigate dentro do componente funcional
import { useNavigate } from "react-router-dom";

const MenuItems = () => {
  const navigate = useNavigate(); // Chame o hook dentro do componente funcional

  const items = [
    {
      label: "Catálogo de filmes",
      icon: "pi pi-fw pi-user",
      command: () => navigate("/filmes"),
    },
    {
      label: "Adicionar Filmes",
      icon: "pi pi-fw pi-briefcase",
      command: () => navigate("/filmes/adicionar"),
    },
    {
      label: "Lista de usuários",
      icon: "pi pi-fw pi-pencil",
    //   command: () => navigate("/projetos"),
    },
    {
      label: "Cadastrar usuário",
      icon: "pi pi-fw pi-user",
    //   command: () => navigate("/aniversariantes"),
    },
  ];

  return items;
};

export default MenuItems;
