import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllProfiles } from "../../actions/profiles";
import { getAllUsers } from "../../actions/users";
import CountUp from "react-countup";

const Topnav = ({
  getAllProfiles,
  getAllUsers,
  user: { users },
  profile: { profiles },
}) => {
  useEffect(() => {
    getAllProfiles();
    getAllUsers();
  }, [getAllProfiles, getAllUsers]);

  return (
    <div className="top-nav">
      <div className="card-counter">
        <h2>
          <i className="fas fa-user" /> PROFIELS
        </h2>
        <h1>
          <CountUp end={profiles.length} />
        </h1>
      </div>
      <div className="card-counter">
        <h2>
          <i className="fas fa-users" /> USERS
        </h2>
        <h1>
          {" "}
          <CountUp end={users.length} />
        </h1>
      </div>
      <div className="card-counter">
        <h2>
          <i className="fas fa-share" /> POSTS
        </h2>
        <h1>
          {" "}
          <CountUp end={profiles.length} />
        </h1>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  user: state.user,
});
export default connect(mapStateToProps, { getAllProfiles, getAllUsers })(
  Topnav
);
