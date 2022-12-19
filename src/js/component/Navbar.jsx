import React from "react";

function Navbar(){
    return <>
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="text-white navbar-brand " href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className=" collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 ms-auto mb-lg-0 ">
        <li className="nav-item">
          <a className=" text-white nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="text-secondary nav-link" href="#">About</a>
        </li>
    
        <li className="nav-item">
          <a className="text-secondary nav-link disabled">Services</a>
        </li>
        <li className="nav-item">
          <a className="text-secondary nav-link disabled">Contact</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </>
}
export default Navbar;

