import React, { useContext, useEffect, useRef } from "react";
import ListOfMarkers from "./listOfMarkers";

import { ReactComponent as Logo } from "../../assets/img/logo/travel.svg";
import { Context } from "./../../globalState/index";
import { setContainerRef } from "../../globalState/actions";

function SideMenu() {
  const containerRef = useRef(null);

  const { dispatch } = useContext(Context);

  useEffect(() => {
    dispatch(setContainerRef(containerRef));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="pt-20 px-10 bg-gray-200 h-full">
      <div className="mb-10">
        <div className="flex ml-2 items-center">
          <Logo height="2rem" weight="2rem" />
          <div>
            <h1 className="inline-block ml-1 mb-0 text-3xl">Travel log</h1>
            <p className=" ml-1 text-gray-500" style={{ fontSize: "10px" }}>
              Track you memories
            </p>
          </div>
        </div>
      </div>
      <div ref={containerRef}></div>
      <ListOfMarkers />
    </div>
  );
}

export default SideMenu;
