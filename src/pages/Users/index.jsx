import React, { useState } from "react";
import axios from "axios";
import InputSearch from "../../components/InputSearch";
import Title from "../../components/Title/index";
import api from "../../services/api";

function Users() {
  const [usersData, setUsersData] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [userSelected, setUserSelected] = useState("");

  async function getUser(name) {
    setUsersData("");
    try {
      const { data } = await axios(
        `${api.baseURL}/${name}?client_id=${api.client_id}&client_secret=${api.client_secret}`
      );
      setUsersData(data);
    } catch (error) {
      alert("Ocorreu um erro ao buscar itens");
    }
  }
  console.log(usersData);

  return (
    <>
      <div className="container">
        <div className="container-fluid align-self-center">
          <Title label="usuários" />
          <div className="row">
            <InputSearch
              placeholder="Digite o usuário"
              labelButton="Pesquisar"
              size="col-md-8"
              userSelected={setUserSelected}
              onSubmit={getUser}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
