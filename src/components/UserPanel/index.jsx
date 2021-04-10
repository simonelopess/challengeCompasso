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
              src={props.profileImage}
              alt="Foto de Perfil"
              style={profileImage}
            ></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                {props.fullName}
                <a href="#" aria-label="repositórios">
                  <span
                    className="badge badge-pill badge-danger ml-3"
                    style={badge}
                  >
                    <i className="fal fa-file-chart-line mr-1"></i>
                    Repo
                  </span>
                </a>
                <a href="#" aria-label="favoritos">
                  <span
                    className="badge badge-pill badge-warning ml-1"
                    style={(badge, badgeStarred)}
                  >
                    <i className="far fa-star mr-1"></i>
                    Start
                  </span>
                </a>
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
  profileImage: PropTypes.string,
  fullName: PropTypes.string,
  location: PropTypes.string,
  bio: PropTypes.string,
};

export default UserPanel;
