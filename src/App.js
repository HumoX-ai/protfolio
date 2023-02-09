import React from "react";
import Main from "./components/Main/index.jsx";
import Practicless from "./components/Practicle/Practicles.jsx";
import Navbar from "./components/Navbar/index";
import { Box } from "@mui/material";
import ReactLoading from "react-loading";
function App({ bars, grey }) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Box sx={{ position: "relative" }}>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#317874",
          }}
        >
          <ReactLoading type={bars} color={grey} height={"20%"} width={"20%"} />
        </Box>
      ) : (
        <>
          <Box>
            <Practicless />
          </Box>

          <Navbar />

          <Box>
            <Main />
          </Box>
        </>
      )}
    </Box>
  );
}

export default App;
