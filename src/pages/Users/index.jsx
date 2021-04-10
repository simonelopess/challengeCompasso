import React, { useState } from "react";
import axios from "axios";
import InputSearch from "../../components/InputSearch";
import Title from "../../components/Title/index";
import api from "../../services/api";
import UserPanel from "../../components/UserPanel";

function Users() {
  const [userSelected, setUserSelected] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [inputValue, setInputValue] = useState("");
  const [repoData, setRepoData] = useState("");

  async function getUser(user) {
    setUserSelected("");
    try {
      const { data } = await axios(
        `${api.baseURL}/${user}?client_id=${api.client_id}&client_secret=${api.client_secret}`
      );
      setUserSelected(data);
    } catch (error) {
      console.log("Ocorreu um erro ao buscar itens");
    }
  }
  console.log(userSelected);

  // eslint-disable-next-line no-unused-vars
  async function getDataRepo(user) {
    try {
      const { data } = await axios(
        `${api.baseURL}/${user}/repos?client_id=${api.client_id}&client_secret=${api.client_secret}`
      );
      setRepoData(data);
    } catch (error) {
      console.log("Repositório não encontrado");
    }
  }
  console.log(repoData);

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
              inputValue={setInputValue}
              onSubmit={getUser}
            />
          </div>
          <section className="mt-5">
            <UserPanel
              image={userSelected.avatar_url}
              title={userSelected.name}
              description={userSelected.bio}
              footer={userSelected.location}
              user={userSelected.login}
              getRepo={getDataRepo}
            />
          </section>
        </div>
      </div>
    </>
  );
}

export default Users;
