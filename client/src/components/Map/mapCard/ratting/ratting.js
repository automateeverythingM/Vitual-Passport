import React, { forwardRef, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
const RattingInput = forwardRef(
  (
    {
      initValue,
      maxValue,
      currentRatting,
      onSelect = (ratting) => {},
      ...rest
    },
    ref
  ) => {
    const [ratting, setRatting] = useState(initValue);
    const [hover, setHover] = useState(null);

    useEffect(() => {
      setRatting(currentRatting);
    }, [currentRatting]);

    return (
      <div className="flex my-3 cursor-pointer items-center">
        {[...Array(maxValue)].map((_, index) => {
          let rattingValue = index + 1;
          return (
            <label
              key={index}
              className="cursor-pointer"
              onMouseEnter={() => setHover(rattingValue)}
              onMouseLeave={() => setHover(null)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.code === "Space") {
                  e.target.click();
                }
              }}
            >
              <input
                className="hidden"
                type="radio"
                name="ratting"
                value={rattingValue}
                ref={ref}
                {...rest}
                checked={ratting === rattingValue}
                onClick={() => {
                  setRatting(rattingValue);
                  onSelect(rattingValue);
                }}
              />
              <FaStar
                size="15px"
                className="mr-1"
                color={rattingValue <= (hover || ratting) ? "#ffc506" : "gray"}
              />
            </label>
          );
        })}
      </div>
    );
  }
);

export default RattingInput;

RattingInput.defaultProps = {
  maxValue: 5,
  initValue: null,
  onSelect: (rattingValue) => {},
};
