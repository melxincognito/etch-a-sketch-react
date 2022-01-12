import React from "react";
import { Button } from "@mui/material";

export default function ClearBoardBtn() {
  // write a function that can clear the board colors
  const clearBoardFunction = () => {
    console.log("hello");
  };
  return (
    <div>
      <Button
        sx={{ bgcolor: "#8748ae", color: "white" }}
        onClick={clearBoardFunction}
      >
        {" "}
        Clear Board
      </Button>
    </div>
  );
}
