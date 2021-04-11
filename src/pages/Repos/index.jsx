import React from "react";
import PropTypes from "prop-types";

function Repo(props) {
  return (
    <>
      <div className="col-md-7"></div>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            id="pills-repository-tab"
            data-toggle="pill"
            href="#pills-repository"
            role="tab"
            aria-controls="pills-repository"
            aria-selected="true"
            onClick={() => props.getRepo(props.user)}
          >
            Repositórios
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="pills-favorites-tab"
            data-toggle="pill"
            href="#pills-favorites"
            role="tab"
            aria-controls="pills-favorites"
            aria-selected="false"
          >
            Favoritos
          </a>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-repository"
          role="tabpanel"
          aria-labelledby="pills-repository-tab"
        >
          <ol className="list-group list-group-numbered">
            {props.repoData?.map((item, index) => {
              console.log("item", item.url);
              return (
                <li
                  className="list-group-item d-flex justify-content-between align-items-start"
                  key={index}
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">
                      <a href={item.url} target="blank">
                        {item.name}
                      </a>
                    </div>
                    {item.description}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
        <div
          className="tab-pane fade"
          id="pills-favorites"
          role="tabpanel"
          aria-labelledby="pills-favorites-tab"
        >
          Favoritos
        </div>
      </div>
    </>
  );
}
Repo.propTypes = {
  repoData: PropTypes.array,
  getRepo: PropTypes.func,
  user: PropTypes.string,
  url: PropTypes.string,
};

export default Repo;
