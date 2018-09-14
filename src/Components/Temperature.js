import React from 'react'
import PropTypes from 'prop-types'

import Format from './TemperatureFormat'
import Status from './TemperatureStatus'

/**
 * The stateless parent temperature component.
 * 
 * @param {string} location    - GPS location name
 * @param {number} temperature - current temperature
 * @param {string}  text       - weather status message
 * @param {boolean} isCelsius  - current weather scale
 * @param {function} onClick   - toggles temperature format
 * @param {string} icon        - weather icon url
 * } 
 * @returns component
 */
const Temperature = ({
  location,
  temperature,
  text,
  isCelsius,
  onClick,
  icon,
}) => {
  return (
    <div style={temperatureStyles}>
      <div style={headerBlockStyle}>
        <h1 style={headerStyle}>
          {location}
        </h1>
        <Format onClick={onClick} isCelsius={isCelsius} />
      </div>
      <Status
        temperature={temperature}
        text={text}
        icon={icon}
        isCelsius={isCelsius}
      />
    </div>
  )
}

let headerStyle = {
  marginTop: '14px',
}

let headerBlockStyle = {
  display: 'flex',
  justifyContent: 'space-between',
}

let temperatureStyles = {
  marginLeft: '10px',
  padding: '2px',
}

Temperature.propTypes = {
  location: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isCelsius: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
}

export default Temperature
