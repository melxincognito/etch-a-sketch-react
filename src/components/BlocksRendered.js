import React from "react";
import Block from "./Block";

export default function BlocksRendered() {
  function createBlocks(num) {
    const array = [];

    for (var i = 0; i < num * num; i++) {
      array.push(<Block> {i} </Block>);
    }
    return array;
  }
  return <>{createBlocks(10)}</>;
}
