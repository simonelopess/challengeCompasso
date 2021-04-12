import React from "react";
import PropTypes from "prop-types";

const containerDashboad = {
  maxWidth: "590px",
};

const subTitleCard = {
  marginBotton: "0px",
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
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text" style={subTitleCard}>
                {props.bio}
              </p>
              <span className="badge badge-pill badge-danger" style={badge}>
                followers {props.followers}
              </span>
              <span
                className="badge badge-pill badge-warning ml-2"
                style={(badge, badgeStarred)}
              >
                following {props.following}
              </span>
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
  following: PropTypes.string,
  followers: PropTypes.string,
  bio: PropTypes.string,
  location: PropTypes.string,
  repoData: PropTypes.array,
};

export default UserPanel;
