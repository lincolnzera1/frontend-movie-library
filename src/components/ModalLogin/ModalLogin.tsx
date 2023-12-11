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
import { loginUser } from "../../controller/userController";
import { UserInterface } from "../../pages/Users/Users";

interface ModalLoginProps {
  user?: LoginInterface;
  visibilidade?: boolean;
  fecharModalLogin: () => void;
}

interface LoginInterface {
  username: string;
  password: string;
}

const ModalLogin: React.FC<ModalLoginProps> = ({
  user,
  visibilidade,
  fecharModalLogin,
}) => {
  const [userData, setUserData] = useState<LoginInterface>({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleLogin = (username: UserInterface) => {
    loginUser(username);
    
  };

  return (
    <ModalEditBackground className="card flex justify-content-center">
      <DialogCustom
        draggable={false}
        dismissableMask
        header="Login de usuário"
        visible={visibilidade}
        onHide={() => {
          fecharModalLogin();
        }}
        // style={{  minWidth: "553px", }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
      >
        <CardCustom
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            minWidth: "560px",
          }}
        >
          <CardChild className="flex align-items-center justify-content-center gap-3">
            <p className="flex align-items-center gap-1">
              <strong className="text-lg">Usuário: </strong>
              <InputText
                type="text"
                placeholder="Usuário"
                name="username"
                className="p-inputtext-sm"
                value={userData.username}
                onChange={handleChange}
              />
            </p>
            <p className="flex align-items-center gap-2">
              <strong className="text-lg">Senha: </strong>
              <InputText
                type="password"
                name="password"
                placeholder="Senha"
                className="p-inputtext-sm"
                value={userData.password}
                onChange={handleChange}
              />
            </p>
          </CardChild>
        </CardCustom>
        <div className="card flex justify-content-end">
          <Button label="Login" onClick={() => handleLogin(userData)} />
        </div>
      </DialogCustom>
    </ModalEditBackground>
  );
};

export default ModalLogin;
