import React from "react";

const Header = ({ messege }) => {
  return (
    
    <nav className="navbar navbar-light bg-info text-center ">
      <div className="container xxl ">
        <p className="navbar-brand" >
          <h3 >{messege}</h3>
        </p>
      </div>
    </nav>
  );
};

export default Header;
