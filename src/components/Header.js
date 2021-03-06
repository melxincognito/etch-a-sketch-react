import React from "react";
import { Box, Paper, Typography } from "@mui/material";

export default function Header() {
  return (
    <>
      <Paper
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          color: "white",
          bgcolor: "#8748ae",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" color="white" fontFamily={"cursive"}>
          {" "}
          👩🏻‍🎨 Etch-A-Sketch 🎨{" "}
        </Typography>
      </Paper>
    </>
  );
}
