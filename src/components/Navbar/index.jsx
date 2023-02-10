import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Hamburger from "hamburger-react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Fade } from "react-awesome-reveal";
import "./style.css";
import { Slide, useScrollTrigger } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";
const drawerWidth = 240;

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: "#3A9BDC",
        height: "100vh",
        color: "white",
        fontFamily: "monospace",
      }}
    >
      <Typography variant="h5" sx={{ my: 2, fontFamily: "cursive" }}>
        HumoX
      </Typography>
      <Divider />
      <List sx={{ fontWeight: "bold" }}>
        <Fade direction="up" duration={1500} fraction={0.2} delay>
          <Box sx={{ mt: 1, mb: 1 }}>
            <Button
              fullWidth
              sx={{
                color: "white",
                fontSize: "18px",
                fontFamily: "monospace",
                ":hover": {
                  bgcolor: "#4682B4",
                  color: "white",
                  opacity: "1",
                },
              }}
            >
              <Box>
                <FontAwesomeIcon icon={faTelegram} />
              </Box>
            </Button>
          </Box>
        </Fade>
        <Fade direction="up" duration={2000} fraction={0.2}>
          <Box sx={{ mt: 1, mb: 1 }}>
            <Button
              fullWidth
              sx={{
                color: "white",
                fontSize: "18px",
                fontFamily: "monospace",
                ":hover": {
                  bgcolor: "#4682B4",
                  color: "white",
                  opacity: "1",
                },
              }}
            >
              About
            </Button>
          </Box>
        </Fade>
        <Fade direction="up" duration={3000} fraction={0.2}>
          <Box>
            <Button
              fullWidth
              sx={{
                color: "white",
                fontSize: "18px",
                fontFamily: "monospace",
                ":hover": {
                  bgcolor: "#4682B4",
                  color: "white",
                  opacity: "1",
                },
              }}
            >
              Contact
            </Button>
          </Box>
        </Fade>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          component="nav"
          elevation={0}
          sx={{ backgroundColor: "#3895D3" }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" } }}
            >
              <Hamburger />
            </IconButton>
            <Typography
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                fontFamily: "cursive",
                display: { xs: "none", sm: "block" },
              }}
            >
              HumoX
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              <Fade direction="down">
                <Button
                  sx={{
                    color: "#fff",
                    mx: 3,
                    textTransform: "none",
                    fontSize: "18px",
                    transition: "all 0.4s ease-in-out",
                    ":hover": {
                      bgcolor: "#4682B4",
                      color: "white",
                      opacity: "1",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Telegram
                    <FontAwesomeIcon
                      color="#0088cc"
                      icon={faTelegram}
                      size="2x"
                      style={{ paddingLeft: "5px" }}
                    />
                  </Box>
                </Button>
              </Fade>
              <Fade direction="down" duration={2000}>
                <Button
                  sx={{
                    color: "#fff",
                    mx: 3,
                    textTransform: "none",
                    fontSize: "18px",
                    transition: "all 0.4s ease-in-out",
                    ":hover": {
                      bgcolor: "#4682B4",
                      color: "white",
                      opacity: "1",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Instagram
                    <FontAwesomeIcon
                      color="#f52f76"
                      icon={faInstagram}
                      size="2x"
                      style={{ paddingLeft: "5px" }}
                    />
                  </Box>
                </Button>
              </Fade>
              <Fade direction="down" duration={3000}>
                <Button
                  sx={{
                    color: "#fff",
                    mx: 3,
                    textTransform: "none",
                    fontSize: "18px",
                    transition: "all 0.4s ease-in-out",
                    ":hover": {
                      bgcolor: "#4682B4",
                      color: "white",
                      opacity: "1",
                    },
                  }}
                >
                  Contact
                </Button>
              </Fade>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="right"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
