import React, { useState } from "react";
import { faHouse, faClockRotateLeft, faUser, faBars, faFolderOpen, faPersonCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LeftScroll = () => {
  return (
    <>
      <div className="container-sm-1  h-100 bg-dark text-white ">
        <div className="mb-4 ms-4 pt-4 ps-1 justify-content-center ">
        <FontAwesomeIcon icon={faBars}  className="p-1 ms-2"/>
        </div>
        <div className=" m-4 ">
          <FontAwesomeIcon icon={faHouse}  className="p-1 ms-2" />
          <p className="fw-light">Home</p>
        </div>
        <div className=" m-4 ">
        <FontAwesomeIcon icon={faFolderOpen} className="p-1 ms-2"/>
          <p className="fw-light">Shorts</p></div>
        <div className=" m-2 " >
        <FontAwesomeIcon icon={faPersonCirclePlus}  className="p-1 ms-4"/>
        <p className="fw-light">Subscriptions</p></div>
        <div className=" m-4 " >
          <FontAwesomeIcon icon={faUser}  className="p-1 ms-2"/>
          <p className="fw-light ms-2">You</p></div>
        <div className=" m-4 " >
        <FontAwesomeIcon icon={faClockRotateLeft}  className="p-1 ms-2"/>
        <p className="fw-light">History</p></div>
      </div>
    </>
  );
};
