import React from 'react';
import "./Home.css";
import { Route, Routes, Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
       <div className="Tab"></div>
      <div className="bg">
        <div className="container main">
          <nav class="navbar navbar-expand-lg navbar-light">
          
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/">
                    {" "}
                    <a class="nav-link new active" aria-current="page" href="#  ">
                      HOME
                    </a>
                  </Link>
                </li>
                <li class="nav-item">
                 <Link to="/Roadmap">  <a class="nav-link" href="#">
                    ROADMAP
                  </a></Link> 
                </li>
                <li class="nav-item">
                <Link to="/Mintapuppy">  <a class="nav-link" href="#">
                    MINT A PUPPY
                  </a></Link>
                </li>
                <li class="nav-item dropdown">
                 <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    'HOW TO...' GUIDES
                  </a>
                    
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                    <Link to="/Connecttometamask"><a class="dropdown-item" href="#">
                        CONNECT TO METAMASK
                      </a>
                        </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                    <Link to="/Seeyourpup"> <a class="dropdown-item" href="#">
                        MINT AND SEE YOUR PUP
                      </a>
                        </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                    <Link to="/Glossary"><a class="dropdown-item" href="#">
                        GLOSSARY OF TERMS
                      </a>
                        </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                    <Link to="/Faqs">
                      <a class="dropdown-item" href="#">
                        FAQS
                        </a>
                        </Link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                <Link to="/Thetopdogs">
                  <a class="nav-link" href="#">
                    THE TOP DOGS
                    </a>
                    </Link>
                </li>
                <li class="nav-item">
                <Link to="/Contact">
                  <a class="nav-link new1" href="#">
                    CONTACT
                    </a>
                    </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
