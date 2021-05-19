import { forwardRef } from "react";
import "../styles/inputWithLabelStyle.css";
const InputWithLabel = forwardRef(
  ({ label, id, validationError, children, ...rest }, ref) => {
    return (
      <div>
        <label clssName="block" htmlFor={id}>
          {label}
        </label>
        <input
          className="block mb-1 rounded-md"
          style={{
            boxShadow:
              validationError && "2px 2px 3px #bb7474, -2px -2px 3px #ffffff",
          }}
          id={id}
          ref={ref}
          {...rest}
        />
        {validationError && <div className="error">{validationError}</div>}
        {children}
      </div>
    );
  }
);

export default InputWithLabel;
