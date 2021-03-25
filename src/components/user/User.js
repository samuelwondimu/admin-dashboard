import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllUsers } from "../../actions/users";
import Spinner from "../layout/Spinner";

const User = ({ getAllUsers, user: { users, loading } }) => {
  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <table>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>registered on</th>
              <th>hashed password</th>
            </tr>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.date}</td>
                <td>{user.password}</td>
              </tr>
            ))}
          </table>
        </Fragment>
      )}
    </Fragment>
  );
};

User.propTypes = {};

const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps, { getAllUsers })(User);
