import React from "react";
import { FaStar } from "react-icons/fa";

function DisplayRatting({ stars }) {
  return (
    <div className="flex mt-3">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          size="20px"
          className="mr-1 "
          color={index + 1 <= stars ? "#ffc506" : "gray"}
        />
      ))}
    </div>
  );
}

export default DisplayRatting;
