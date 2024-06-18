import React from "react";
import { faHouse, faClockRotateLeft, faUser, faBars, faFolderOpen, faPersonCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LeftScroll = () => {
  return (
    <>
      <div className=" bg-dark text-white ">
        <div className="mb-4 ms-3 pt-4 al">
        <FontAwesomeIcon icon={faBars}/>
        </div>
        <div className="ms-3 ">
          <FontAwesomeIcon icon={faHouse}/>
          <p>Home</p>
        </div>
        <div>
        <FontAwesomeIcon icon={faFolderOpen} />
          <p>Shorts</p></div>
        <div>
        <FontAwesomeIcon icon={faPersonCirclePlus} />
        <p>Subscriptions</p></div>
        <div>
          <FontAwesomeIcon icon={faUser} />
          <p>You</p></div>
        <div>
        <FontAwesomeIcon icon={faClockRotateLeft} />
        <p>History</p></div>
      </div>
    </>
  );
};
