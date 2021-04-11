import React, { useState } from "react";
import axios from "axios";
// import InputSearch from "../../components/InputSearch";
import Title from "../../components/Title/index";
import api from "../../services/api";
import UserPanel from "../../components/UserPanel";
import Repo from "../Repos";

function Users() {
  const [userSelected, setUserSelected] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [inputValue, setInputValue] = useState("");
  const [repoData, setRepoData] = useState(null);

  async function getUser(user) {
    setUserSelected("");
    try {
      const { data } = await axios(
        `${api.userURL}/${user}?client_id=${api.client_id}&client_secret=${api.client_secret}`
      );
      setUserSelected(data);
    } catch (error) {
      console.log("Ocorreu um erro ao buscar itens");
    }
  }

  async function getDataRepo(user) {
    try {
      const { data } = await axios(
        `${api.userURL}/${user}/repos?client_id=${api.client_id}&client_secret=${api.client_secret}`
      );
      setRepoData(data);
    } catch (error) {
      console.log("Repositório não encontrado");
    }
  }

  return (
    <>
      <div className="container">
        <div className="container-fluid align-self-center">
          <Title label="usuários" />
          <div className="row">
            <form className="col-md-8">
              <div className="input-group input-group-lg">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Digite o usuário"
                  aria-label="Email"
                  onChange={(e) => getUser(e.target.value)}
                />
              </div>
            </form>
          </div>
          <section className="mt-5">
            <p>
              <em>Resultado encontrado para: </em>
              <strong> {inputValue}</strong>
            </p>

            {userSelected.length !== 0 ? (
              <div>
                <UserPanel
                  avatar_url={userSelected?.avatar_url}
                  name={userSelected?.name}
                  bio={userSelected?.bio}
                  location={userSelected?.location}
                />
                <Repo
                  repoData={repoData}
                  getRepo={getDataRepo}
                  user={userSelected?.login}
                  url={userSelected?.url}
                />
              </div>
            ) : null}
          </section>
        </div>
      </div>
    </>
  );
}

export default Users;
