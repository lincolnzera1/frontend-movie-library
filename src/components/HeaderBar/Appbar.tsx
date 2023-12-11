import { Menubar } from "primereact/menubar";
import React, { useState } from "react";
import MenuItems from "./MenuItems";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import ModalLogin from "../ModalLogin/ModalLogin";

const Appbar = () => {
  const navigate = useNavigate();
  const [visibilityLogin, setvisibilityLogin] = useState<boolean>(false);

  const fecharModalLogin = () => {
    setvisibilityLogin(false);
  };

  return (
    <div>
      <Menubar
        end={
          localStorage.getItem("username") ? (
            <div className="flex align-items-center gap-3">
              {localStorage.getItem("username")}
              <Button
                label="Deslogar"
                className="bg-red-600"
                onClick={() => {
                  localStorage.removeItem("username");
                  setTimeout(() => {
                    window.location.reload();
                  }, 250);
                }}
              />
            </div>
          ) : (
            <Button
              label="Login"
              onClick={() => {
                setvisibilityLogin(true);
              }}
            />
          )
        }
        model={MenuItems()}
      />
      <ModalLogin
        fecharModalLogin={fecharModalLogin}
        visibilidade={visibilityLogin}
      />
    </div>
  );
};

export default Appbar;
