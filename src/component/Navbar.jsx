import React from 'react';

const Navbar = () => {
  return (
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand fw-bold fs-4" href="/">
          SHOP TEST
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Products
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Contact
              </a>
            </li>
          </ul>
          <div className="buttons">
            <a href="" className="btn btn-outline-dark">
              <i className="fa fa-sign-in me-1"></i> Login
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
