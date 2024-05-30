// Navbar.jsx
import React, { useState, useEffect } from "react";
import "../CSS/navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isModalClose, isModalOpen } from "../Toolkit/Slice/ModalSlice";
import Modal from "../Modal/Modal";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const linkStyle = (path) => ({
    color: activeLink === path ? "#a3a6bb" : "#fff",
  });

  const openModal = () => {
    dispatch(isModalOpen());
  };

  const closeModal = () => {
    dispatch(isModalClose());
  };

  return (
    <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="container-fluid header">
        <Link to="/" className="navbar-brand">
          <img src="/demo-hosting-logo-white.webp" alt="photo not found" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="justify-content-evenly collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="justify-content-center d-flex navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link link" style={linkStyle("/")}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link link"
                style={linkStyle("/about")}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/hosting"
                className="nav-link link"
                style={linkStyle("/hosting")}
              >
                Hosting
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/domain"
                className="nav-link link"
                style={linkStyle("/domain")}
              >
                Domain
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/pricing"
                className="nav-link link"
                style={linkStyle("/pricing")}
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/support"
                className="nav-link link"
                style={linkStyle("/support")}
              >
                Support
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link link btn"
                style={linkStyle("/contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
          <form className="d-flex form" role="search">
            <button
              onClick={openModal}
              type="button"
              className="search-btn btn btn-dark bg-transparent"
            >
              <i className="fa-solid search fa-magnifying-glass"></i>Search
            </button>
            <Link to="/signin" className="sign-btn">
              Sign In
            </Link>
          </form>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className="headingg">
          <h2>What are you looking for?</h2>
        </div>
        <div className="modal-search">
          <input
            type="search"
            name="search"
            id="search"
            className="search-input"
            placeholder="Enter your keywords..."
          />
        </div>
      </Modal>
    </nav>
  );
};

export default Navbar;
