import React, { Component, Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getAllProfiles } from "../../actions/profiles";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Profile = ({ getAllProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getAllProfiles();
  }, [getAllProfiles]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <table>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Company</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
            {profiles.map((profile) => (
              <tr key={profile._id}>
                <td>{profile._id}</td>
                <td>{profile.user.name}</td>
                <td>{profile.company}</td>
                <td>{profile.location}</td>
                <td>{profile.status}</td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getAllProfiles })(Profile);
