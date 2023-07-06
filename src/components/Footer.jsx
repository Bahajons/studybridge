import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="text-center pos-re">
        <div className="container">
          {/* <!-- Logo --> */}
          <a className="logo text-center" href="#">
            <img
              src="./image/logo-white.png"
              style={{ width: "200px" }}
              alt="logo"
            />
          </a>

          <div className="social">
            <a href="#0">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#0">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#0">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#0">
              <i className="fab fa-behance"></i>
            </a>
            <a href="#0">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </div>

          <p>
            {/* <a target="_blank" href="https://templateshub.net">
                Templates Hub
              </a> */}
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            sunt aperiam corrupti!
          </p>
        </div>

        <div className="curve curve-top curve-center"></div>
      </footer>
    </div>
  );
}
