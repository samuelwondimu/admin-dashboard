import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div class="sidenav">
      <Link to="/profiles">Profiles</Link>
      <Link to="/users">Users</Link>
    </div>
  );
};

export default Nav;
