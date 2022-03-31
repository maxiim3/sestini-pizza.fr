import React from "react";
import PropTypes from "prop-types";
/**
 * #Button Wrapper
 * @param children
 * @param activeClass {boolean}
 * @param onClick {function}
 * @param key {string || number}
 * @param nav {boolean} nav ? Nav button : common Button, calls and applies the selected style
 * @return {JSX.Element}
 * @constructor
 */
export const Button = ({
  children,
  activeClass,
  onClick,
  key,
  nav = false,
}) => {
  const colors = {
    isActive: "bg-yellow-100 text-dark",
    isNotActive:
      "border-yellow-100 text-yellow-100 bg-transparent border-solid border-2",
  };
  const commonStyles = {
    layoutProps: "flex flex-column justify-center items-center",
    boxProps: "h-32 w-28 px-2 m-0 p-0 ",
    borderProps: "rounded-3xl box-border",
    textProps: "text-base font-semibold text-center ",
  };
  const navStyles = {
    layoutProps: "flex flex-row justify-evenly items-center gap-y-2",
    boxProps: "h-28 w-64 px-2 m-0 p-0 ",
    borderProps: "rounded-full box-border",
    textProps: "text-lg font-semibold text-center ",
  };

  const getClasses = () => {
    return nav ? navStyles : commonStyles;
  };

  return (
    <div
      key={key}
      className={`${getClasses().layoutProps} ${getClasses().boxProps} ${
        getClasses().borderProps
      } ${getClasses().textProps} ${
        activeClass ? colors.isActive : colors.isNotActive
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

/**
 * Strict Type Checking Props
 * @type {{onCLick: Requireable<(...args: any[]) => any>, activeClass: Requireable<string>, children: *, key: Requireable<string>}}
 */
Button.propTypes = {
  activeClass: PropTypes.bool,
  onCLick: PropTypes.func,
  key: PropTypes.string || PropTypes.number,
  nav: PropTypes.bool,
};
