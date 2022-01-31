import React from "react";

const Header = ({ messege }) => {
  return (
    
    <nav className="navbar navbar-light bg-info text-center ">
      <div className="container xxl ">
        <a className="navbar-brand" href="#">
          <h3 >{messege}</h3>
        </a>
      </div>
    </nav>
  );
};

export default Header;
