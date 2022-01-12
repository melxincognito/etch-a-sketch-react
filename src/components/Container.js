import { Container } from "@mui/material";
import React from "react";

export default function MainContainer(props) {
  return (
    <Container
      id="gridContainer"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: "554px",
        height: "506px",
        border: "solid black",
        bgcolor: "pink",
      }}
    >
      {props.children}
    </Container>
  );
}
