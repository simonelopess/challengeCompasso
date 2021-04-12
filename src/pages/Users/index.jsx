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
  const [starred, setStarred] = useState(null);
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

  async function getStarred(user) {
    try {
      const { data } = await axios(
        `${api.userURL}/${user}/starred?client_id=${api.client_id}&client_secret=${api.client_secret}`
      );
      setStarred(data);
    } catch (error) {
      console.log("Repositório não encontrado");
    }
  }

  return (
    <>
      <div className="container">
        <div
          className="container-fluid align-self-center"
          style={{ marginTop: "70px" }}
        >
          <Title label="usuários" />
          <div className="row">
            <form className="col-md-8">
              <div className="input-group input-group-lg">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Digite o usuário"
                  aria-label="Email"
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <span className="input-group-append">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => (
                      getUser(inputValue),
                      getDataRepo(inputValue),
                      getStarred(inputValue)
                    )}
                  >
                    Pesquisar
                  </button>
                </span>
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
                  user={userSelected?.login}
                  url={userSelected?.url}
                  starred={starred}
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
