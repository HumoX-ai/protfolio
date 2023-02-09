import { Typography } from "@mui/material";
import React from "react";

import Typed from "react-typed";

const textLines = [
  `Hammaga salom mening ismim <b>Humoyun</b>`,
  `Yoshim <b>17</b>da.`,
  `Bu Test <b>Portfolio</b>😉`,
  `Xush kelibsiz🤠`,
];
const Type = () => (
  <Typography
    style={{ fontSize: "50px", fontFamily: "monospace", textAlign: "center" }}
  >
    <Typed strings={textLines} typeSpeed={50} />
  </Typography>
);

export default Type;
