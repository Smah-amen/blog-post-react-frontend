import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="bg-image d-flex flex-column justify-content-center align-items-center w-100 py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center text-md-start d-none d-md-block">
            <h1
              className="display-4 mb-3"
              style={{
                fontWeight: "bold",
                color: "#541562",
                fontSize: "2rem",
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
              }}
            >
              Welcome to the world of creativity
            </h1>
            <p className="lead mb-4">
              Here, where your ideas turn into words, and your stories find a place to shine. Go ahead,
              share your inspiration, and let your creativity tell your story.
            </p>
            <Link
              to="/learn-more"
              className="btn btn-lg text-white"
              style={{
                padding: '10px 20px',
                backgroundColor: "#822570",
                borderRadius: '30px',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)'
              }}
            >
              Learn More
            </Link>
          </div>
          <div className="col-12 col-md-6 text-center text-md-end d-none d-md-block">
            <img
              src="/images/header1.jpg"
              alt="Nature Illustration"
              className="img-fluid"
              style={{ height: "auto", maxWidth: "100%", border: "none" }}
            />
          </div>
          <div className="col-12 d-block d-md-none text-center">
            <h1
              className="display-4 mb-3"
              style={{
                fontWeight: "bold",
                color: "#541562",
                fontSize: "1.5rem", 
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
              }}
            >
              Welcome to the world of creativity
            </h1>
            <p className="lead mb-4">
              Here, where your ideas turn into words, and your stories find a place to shine. Go ahead,
              share your inspiration, and let your creativity tell your story.
            </p>
            <Link
              to="/learn-more"
              className="btn btn-lg text-white"
              style={{
                padding: '10px 20px',
                backgroundColor: "#822570",
                borderRadius: '30px',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)'
              }}
            >
              Learn More
            </Link>
          </div>
          <div className="col-12 d-block d-md-none text-center">
            <img
              src="/images/header1.jpg"
              alt="Nature Illustration"
              className="img-fluid"
              style={{ height: "auto", maxWidth: "100%", border: "none" }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
