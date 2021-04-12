import React, { useState } from "react";
import axios from "axios";
// import InputSearch from "../../components/InputSearch";
import Title from "../../components/Title/index";
import api from "../../services/api";
import UserPanel from "../../components/UserPanel";
import Repo from "../../components/Repos";

function Users() {
  const [user, setUser] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [repositorys, setRepositorys] = useState(null);
  const [starreds, setStarreds] = useState(null);

  async function getUser(user) {
    setUser("");
    try {
      const { data } = await axios(
        `${api.userURL}/${user}?client_id=${api.client_id}&client_secret=${api.client_secret}`
      );
      setUser(data);
    } catch (error) {
      alert("Usuário não encontrado");
    }
  }

  async function getDataRepo(user) {
    try {
      const { data } = await axios(
        `${api.userURL}/${user}/repos?client_id=${api.client_id}&client_secret=${api.client_secret}`
      );
      setRepositorys(data);
    } catch (error) {
      console.log("Repositório não encontrado");
    }
  }

  async function getStarred(user) {
    try {
      const { data } = await axios(
        `${api.userURL}/${user}/starred?client_id=${api.client_id}&client_secret=${api.client_secret}`
      );
      setStarreds(data);
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
              <em>Última pesquisa: </em>
              <strong> {user.login}</strong>
            </p>

            {user.length !== 0 ? (
              <div>
                <UserPanel
                  avatar_url={user?.avatar_url}
                  name={user?.name}
                  bio={user?.bio}
                  location={user?.location}
                  followers={user?.followers}
                  following={user?.following}
                />
                <Repo
                  repositorys={repositorys}
                  user={user?.login}
                  url={user?.url}
                  starreds={starreds}
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
