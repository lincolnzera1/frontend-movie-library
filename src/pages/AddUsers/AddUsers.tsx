import React, { useEffect, useState } from "react";
import MenuItems from "../../components/HeaderBar/MenuItems";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { Button } from "primereact/button";
import { Movie } from "../Movies/Movies";
import { addNewMovie } from "../../controller/movieController";
import { AddMoviesBackground } from "../AddMovies/AddMoviesStyles";
import { UserInterface } from "../Users/Users";
import { addNewUser } from "../../controller/userController";
import Appbar from "../../components/HeaderBar/Appbar";
import { useNavigate } from "react-router-dom";

const AddUsers = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [newUser, setNewUser] = useState<UserInterface>({
    username: username,
    email: email,
    password: password,
  });

  useEffect(() => {
    // Atualizar newMovie sempre que houver mudanças nos estados individuais
    setNewUser({
      username: username,
      email: email,
      password: password,
    });
  }, [username, email, password]);
  
  const navigate = useNavigate();

  return (
    <AddMoviesBackground>
      <Appbar />
      <div
        className="flex align-items-center justify-content-center"
        style={{ height: "100%" }}
      >
        <div>
          <div className="flex flex-column align-items-end">
            <div className="field grid">
              <label className="col-fixed">Nome de usuário:</label>
              <div className="col">
                <InputText
                  type="text"
                  className="p-inputtext-sm"
                  placeholder="Nome de usuário"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="field grid">
              <label className="col-fixed">Email:</label>
              <div className="col">
                <InputText
                  type="text"
                  className="p-inputtext-sm"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="field grid">
              <label className="col-fixed">Password:</label>
              <div className="col">
                <InputText
                  type="password"
                  className="p-inputtext-sm"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="card flex justify-content-end">
            <Button
              label="Cadastrar usuário"
              onClick={() => {
                console.log("seus dados agora: ", newUser);
                addNewUser(newUser);
                setTimeout(() => {
                  navigate("/usuarios")
                }, 250);
              }}
            />
          </div>
        </div>
      </div>
    </AddMoviesBackground>
  );
};

export default AddUsers;
