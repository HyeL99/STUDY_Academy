import React from "react";
import "./Button.scss";
import classNames from "classnames";

const Button = ({ children, size, color, outline, fullWidth, ...rest }) => {
  return (
    <>
      {/* <button className={['Button', size].join(" ")}>{children}</button> */}
      {/* <button className={`Button ${size}`}>{children}</button> */}
      <button
        className={classNames("Button", size, color, { outline, fullWidth })}
        // onClick={onClick}
        // onMouseMove={onMouseMove}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};
Button.defaultProps = {
  size: "medium",
  color: "yellow",
};
export default Button;

/*
  yarn add classnames  - classnames 라이브러리 설치

  받아올 것이 너무 많아 ...rest 사용
*/
