import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleUser,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

export const SearchBar = () => {
  return (
    <>
      <nav className="navbar navbar-dark mb-1 ">
        <div className="container-fluid justify-content-around ">
          <div className=" navbar-brand text-light ">Youtube </div>
          <div className="col-6 rounded-5 d-flex  p-0 bg-gray-700 ">
            <input
              className="rounded-start-5 rounded-end-0 border-secondary m-0 p-0 form-control me-2 bg-dark text-white-50"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="rounded-end-5 m-1 p-2 me-3 text-white"
            />
          </div>
          <div className=" rounded-circle m-1 p-2 bg-gray-700">
          <FontAwesomeIcon icon={faMicrophone}  className="text-white"/>
          </div>
          <div className="btn bg-dark hover:bg-blue-700 border-secondary rounded-pill  align-align-items-end text-info">
            <FontAwesomeIcon icon={faCircleUser} className="me-2" />
            Sign in
          </div>
        </div>
      </nav>
    </>
  );
};
