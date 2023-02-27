import React, { useEffect } from "react";
import Main from "./components/Main/index.jsx";
import Practicless from "./components/Practicle/Practicles.jsx";
import Navbar from "./components/Navbar/index";
import { Box, keyframes } from "@mui/material";

import styled from "@emotion/styled";
import { BallTriangle } from "react-loader-spinner";
import Footer from "./components/Footer/index.jsx";
function App({ bars, grey }) {
  const [loading, setLoading] = React.useState(true);

  const fadeIn = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

  const Wrapper = styled(Box)`
    position: fixed;
    display: grid;
    place-items: center;
    inset: 0;
    animation: ${fadeIn} 10s ease-in-out forwards;
    background: linear-gradient(to right, #00467f, #a5cc82);
  `;
  const Color = styled(Box)`
    background: linear-gradient(to right, #2b5876, #4e4376);
    color: white;
  `;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <Box sx={{ position: "relative" }}>
      {loading ? (
        <Wrapper>
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        </Wrapper>
      ) : (
        <Color>
          <Practicless />

          <Navbar />

          <Main />
          <Footer  />
        </Color>
      )}
    </Box>
  );
}

export default App;
