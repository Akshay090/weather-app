import React from "react";
import Radium from "radium";
import logo from './splash.png'

class SplashScreen extends React.Component {
  render() {
    return (
      <div>
        <div style={styles.inner}>
        <img src={logo} alt="bouncy" />
        </div>
      </div>
    );
  }
}

var pulseKeyframes = Radium.keyframes(
  {
    "0%": {},
    "50%": { transform: "translateY(-250 %)" },
    "100%": {}
  },
  "pulse"
);

var styles = {
  inner: {
    animationName: pulseKeyframes,
    animation: "2s infinite 0s ease"
  }
};

export default Radium(SplashScreen);
