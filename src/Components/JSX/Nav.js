import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="container-fluid w-100 p-2">
      <div className="main-container container d-flex align-items-center justify-content-between">

        <div className="log"><h2>Crud App</h2></div>
        <div className="navbar navbar-expand-lg navbar-light bg-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              
              <li class="nav-item active">
                <a class="nav-link"><Link to="/registration">New Registration</Link></a>
              </li>
              
              <li class="nav-item">
                <a class="nav-link"><Link to="/students">All registrations</Link></a>
              </li>
          
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav