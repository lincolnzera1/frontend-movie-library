import React, { useEffect, useState } from "react";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { Button } from "primereact/button";
import { deleteUser, getUserList } from "../../controller/userController";
import MenuItems from "../../components/HeaderBar/MenuItems";
import { Menubar } from "primereact/menubar";

export interface UserInterface {
  id?: number;
  username?: string;
  email?: string;
  password?: string;
}

const Users = () => {
  const [user, setUser] = useState<UserInterface[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await getUserList();
        setUser(users);
        console.log("Seus dados: ", users);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchData();
  }, []);

  const itemTemplate = (user: UserInterface) => {
    return (
      <div className="col-12">
        <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
          {/* 
          <img
            className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
            src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
            alt={product.name}
          /> */}
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900">{user.username}</div>
              <div className="flex align-items-center gap-3">
                <span className="flex align-items-center gap-2">
                  <i className="pi pi-tag"></i>
                  <span className="font-semibold">{user.email}</span>
                </span>
              </div>
            </div>
            <Button
              label="Deletar usuário"
              className="bg-red-600"
              onClick={() => {
                deleteUser(user.id!);
                setTimeout(() => {
                  window.location.reload();
                }, 250);
              }}
            ></Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <Menubar model={MenuItems()} />
      <DataView value={user} itemTemplate={itemTemplate} />
    </div>
  );
};

export default Users;
