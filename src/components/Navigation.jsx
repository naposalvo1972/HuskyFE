import React from "react";
import { NavLink } from "react-router-dom";


function Navigation() {
  return (
    <div className="navigation">

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
              <NavLink className="navbar-brand" to="/">
                  HUSK ME
                </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <NavLink className="nav-link" to="/">
                Home
                <span className="sr-only">(current)</span>
            </NavLink>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link" to="/generale">
                        Generale
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/comesta">
                        Come sta?
                      </NavLink>
              
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/spostamenti">
                        Dove sta?
                      </NavLink>
              </li>
              
              <li className="nav-item">
              <NavLink className="nav-link" to="/alert">
                        C'è qualche problema?
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/diario">
                        Diario
              </NavLink>
              </li>

            </ul>
            
          </div>
        </div>
      </nav>

    </div>
  );
}

export default Navigation;
