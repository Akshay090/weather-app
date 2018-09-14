import React from "react";
import PropTypes from "prop-types";
/**
 * Radium is a set of tools to manage inline styles on React elements.
 *  It gives you powerful styling capabilities without CSS.
 * :hover is supported due to react
 */
import Radium from "radium";

/**
 * A stateless component which renders the temperature
 * format selector.
 *
 * @param {function} onClick  - toggles temperature format
 * @param {boolean} isCelsius - current temperature scale
 * @returns component
 */
const TemperatureFormat = ({ onClick, isCelsius }) => {
  return (
    <span onClick={onClick} style={scalesStyles}>
      {isCelsius ? (
        <span>
          <b>
            <sup>o</sup>C
          </b>/<sup>o</sup>F
        </span>
      ) : (
        <span>
          <sup>o</sup>C/<b>
            <sup>o</sup>F
          </b>
        </span>
      )}
    </span>
  );
};

let scalesStyles = {
  padding: "3px",
  ":hover": {
    cursor: "pointer"
  }
};
// :hover adds hover effect to the entire body here body is the temperature selector
TemperatureFormat.propTypes = {
  onClick: PropTypes.func.isRequired,
  isCelsius: PropTypes.bool.isRequired
};

export default Radium(TemperatureFormat);
