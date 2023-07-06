import React from "react";

export default function Navbar() {
  return (
    <div>
      {/* <!-- =====================================
    	==== Start Loading --> */}

      <div className="loading">
        <div className="text-center middle">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      {/*         
    	<!-- End Loading ====
    	======================================= --> */}

      {/* <!-- =====================================
    	==== Start Navbar --> */}

      <nav className="navbar navbar-expand-lg" style={{position:'fixed'}}>
        <div className="container">
          {/* <!-- Logo --> */}
          <a className="logo" href="#">
            <img style={{width:'200px'}} src="./image/logo-light.png" alt="logo" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar">
              <i className="fas fa-bars"></i>
            </span>
          </button>

          {/* <!-- navbar links --> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#" data-scroll-nav="0">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" data-scroll-nav="1">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" data-scroll-nav="2">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" data-scroll-nav="3">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" data-scroll-nav="4">
                  Price
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" data-scroll-nav="5">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" data-scroll-nav="6">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- End Navbar ====
    	======================================= --> */}
    </div>
  );
}
