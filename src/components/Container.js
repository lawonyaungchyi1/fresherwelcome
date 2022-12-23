import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/material";
import Lover from "../photos/love-1.png";
import MessageBox from "./MessageBox/MessageBox";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <img
          src={Lover}
          alt="Lover"
          style={{ width: "100%", height: "100%" }}
        />
        <MessageBox />
      </Container>
    </React.Fragment>
  );
}
