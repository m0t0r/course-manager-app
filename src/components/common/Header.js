import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav className="nav">
      <IndexLink className="nav-link" to="/" activeClassName="active">Home</IndexLink>
      <Link className="nav-link" to="courses" activeClassName="active">Courses</Link>
      <Link className="nav-link" to="about" activeClassName="active">About</Link>
    </nav>
  );
};

export default Header;
