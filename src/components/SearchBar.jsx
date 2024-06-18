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
      <nav className="navbar navbar-light mb-2 d-flex flex-row fixed-top d-flex bg-dark ">
        <div className="container-fluid ">
          <div className="col-2 navbar-brand text-light ">Youtube </div>
          <div className="col-6 rounded-5 d-flex  p-0 bg-secondary  ">
            <input
              className="rounded-start-5 m-0 p-0 form-control me-2 bg-dark text-white-50"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="rounded-end-5 m-1 p-2 me-3 text-white"
            />
          </div>
          <div className=" rounded-circle m-1 p-2  bg-secondary">
            <FontAwesomeIcon icon={faMicrophone} />
          </div>
          <div className="btn bg-secondary rounded-pill m-2 text-bg-info">
            <FontAwesomeIcon icon={faCircleUser} className="me-2" />
            Sign in
          </div>
        </div>
      </nav>
    </>
  );
};
