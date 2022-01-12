import React from "react";

export default function Block(props) {
  const styles = {
    backgroundColor: props.blockColor,
    height: props.height,
    width: props.width,
  };
  function rainbowColor(e) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.backgroundColor = "#" + randomColor;
  }

  return <div id="block" style={styles} onMouseOver={rainbowColor}></div>;
}

Block.defaultProps = {
  blockColor: "white",
  height: 50,
  width: 50,
};
