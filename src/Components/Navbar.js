import React from "react";
import "./Home.css";
import { Route, Routes, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="Tab"></div>
      <div className="bg">
        <div className="container main">
          <nav className="d-none cxl-flex navbar navbar-expand navbar-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/">
                    <a className="nav-link new active" aria-current="page">
                      HOME
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Roadmap">
                    <a className="nav-link">ROADMAP</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Mintapuppy">
                    <a className="nav-link">MINT</a>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    'HOW TO...' GUIDES
                  </a>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link to="/Connecttometamask">
                        <a className="dropdown-item">CONNECT TO METAMASK</a>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/Seeyourpup">
                        <a className="dropdown-item">MINT AND SEE YOUR PUP</a>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/Glossary">
                        <a className="dropdown-item">GLOSSARY OF TERMS</a>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/Faqs">
                        <a className="dropdown-item">FAQS</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/Thetopdogs">
                    <a className="nav-link">THE TOP DOGS</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Contact">
                    <a className="nav-link new1">CONTACT</a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <nav className="d-none clg-flex navbar navbar-expand navbar-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/">
                    <a className="nav-link new active" aria-current="page">
                      HOME
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Roadmap">
                    <a className="nav-link">ROADMAP</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Mintapuppy">
                    <a className="nav-link">MINT</a>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    'HOW TO...' GUIDES
                  </a>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link to="/Connecttometamask">
                        <a className="dropdown-item">CONNECT TO METAMASK</a>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/Seeyourpup">
                        <a className="dropdown-item">MINT AND SEE YOUR PUP</a>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/Glossary">
                        <a className="dropdown-item">GLOSSARY OF TERMS</a>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/Faqs">
                        <a className="dropdown-item">FAQS</a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link new1 dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    MORE
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link to="/Thetopdogs">
                        <a className="dropdown-item">THE TOP DOGS</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Contact">
                        <a className="dropdown-item">CONTACT</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
          <nav className="d-none cmd-flex navbar navbar-expand navbar-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/">
                    <a className="nav-link new active" aria-current="page">
                      HOME
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Roadmap">
                    <a className="nav-link">ROADMAP</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Mintapuppy">
                    <a className="nav-link">MINT</a>
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link new1 dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    MORE
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link to="/Connecttometamask">
                        <a className="dropdown-item">CONNECT TO METAMASK</a>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/Seeyourpup">
                        <a className="dropdown-item">MINT AND SEE YOUR PUP</a>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/Glossary">
                        <a className="dropdown-item">GLOSSARY OF TERMS</a>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/Faqs">
                        <a className="dropdown-item">FAQS</a>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/Thetopdogs">
                        <a className="dropdown-item">THE TOP DOGS</a>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/Contact">
                        <a className="dropdown-item">CONTACT</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
          <nav className="d-none csm-flex navbar navbar-expand navbar-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/">
                    <a className="nav-link new active" aria-current="page">
                      HOME
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Roadmap">
                    <a className="nav-link">ROADMAP</a>
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link new1 dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    MORE
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link to="/Mintapuppy">
                        <a className="dropdown-item">MINT</a>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/Connecttometamask">
                        <a className="dropdown-item">CONNECT TO METAMASK</a>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/Seeyourpup">
                        <a className="dropdown-item">MINT AND SEE YOUR PUP</a>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/Glossary">
                        <a className="dropdown-item">GLOSSARY OF TERMS</a>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/Faqs">
                        <a className="dropdown-item">FAQS</a>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/Thetopdogs">
                        <a className="dropdown-item">THE TOP DOGS</a>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/Contact">
                        <a className="dropdown-item">CONTACT</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
          <nav className="cs-flex navbar navbar-expand navbar-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link new new1 dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    MENU
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link to="/">
                        <a className="dropdown-item" aria-current="page">
                          HOME
                        </a>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/Roadmap">
                        <a className="dropdown-item">ROADMAP</a>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/Mintapuppy">
                        <a className="dropdown-item">MINT</a>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/Connecttometamask">
                        <a className="dropdown-item">CONNECT TO METAMASK</a>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/Seeyourpup">
                        <a className="dropdown-item">MINT AND SEE YOUR PUP</a>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/Glossary">
                        <a className="dropdown-item">GLOSSARY OF TERMS</a>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/Faqs">
                        <a className="dropdown-item">FAQS</a>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/Thetopdogs">
                        <a className="dropdown-item">THE TOP DOGS</a>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/Contact">
                        <a className="dropdown-item">CONTACT</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
