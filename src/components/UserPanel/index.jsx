import React from "react";
import PropTypes from "prop-types";

const containerDashboad = {
  maxWidth: "590px",
};

const profileImage = {
  maxWidth: "100%",
  padding: "8px 0px 8px 8px",
};

const badge = {
  fontSize: "0.7em",
};

const badgeStarred = {
  fontSize: "0.7em",
  color: "white",
};

const UserPanel = (props) => {
  return (
    <>
      <div className="card mb-3" style={containerDashboad}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={props.avatar_url}
              alt="Foto de Perfil"
              style={profileImage}
            ></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                {props.name}
                <span
                  className="badge badge-pill badge-danger ml-3"
                  style={badge}
                >
                  <i className="fal fa-file-chart-line mr-1"></i>
                  Repo
                </span>
                <span
                  className="badge badge-pill badge-warning ml-1"
                  style={(badge, badgeStarred)}
                >
                  <i className="far fa-star mr-1"></i>
                  Start
                </span>
              </h5>
              <p className="card-text">{props.bio}</p>
              <p className="card-text">
                <small className="text-muted">{props.location}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

UserPanel.propTypes = {
  avatar_url: PropTypes.string,
  name: PropTypes.string,
  bio: PropTypes.string,
  location: PropTypes.string,
  repoData: PropTypes.array,
};

export default UserPanel;
