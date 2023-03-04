import { Container, Divider, Grid, Typography } from "@mui/material";

import React from "react";
import Type from "./Typed";

import "animate.css";
import { Box } from "@mui/system";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBuildingUser,
  faFileCircleCheck,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Main2 from "./index2";
import Drawer from "./index3";

const extra = [
  {
    id: 1,
    icon: (
      <FontAwesomeIcon icon={faFileCircleCheck} size="3x" color="#4297a0" />
    ),
    text: "0+",
    text2: "Qilgan loyihalarim",
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faBuildingUser} size="3x" color="#29a0b1" />,
    text: "0+",
    text2: "Ishlagan kompaniyalarim",
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faUsers} size="3x" color="#189ab4" />,
    text: "0+",
    text2: "Men tanishgan jamoalar",
  },
];

export default function Main() {
  return (
    <Container sx={{ position: "sticky" }}>
      <Typography sx={{ color: "white" }}>
        <Grid
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row", sm: "row" },
          }}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={6} sm={6} xs={12} lg={6}>
            <Box sx={{ mb: 4 }}>
              <Type />
            </Box>
          </Grid>
          <Grid item md={6} sm={6} xs={12} lg={6}>
            <Box
              sx={{
                borderRadius: 3,
                mt: 5,
                mb: 3,
                p: 1,
                backdropBlur: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <Fade bottom cascade delay={1500}>
                <img
                  style={{ borderRadius: "5px" }}
                  src={require("../Assets/image/img.JPG")}
                  alt=""
                  width="100%"
                />
              </Fade>
              <Fade bottom cascade delay={2000}>
                <Typography
                  variant="overline"
                  sx={{
                    textTransform: "none",
                    fontSize: { md: "20px", xs: "13px" },
                  }}
                >
                  Assalomu alaykum barchaga. Men Toshkent viloyati, Yangiyo'l
                  tumanida istiqomat qilaman. Hozirda O'zim yashab turgan
                  tumanga qarashli 42-maktabda 11-sinfida tahsil olaman.
                  Dasturchilik bilan 2020-yildan buyon tanishman
                </Typography>
              </Fade>
             
            </Box>
          </Grid>
        </Grid>
      </Typography>
      <Main2 />
      <Box sx={{ pt: 14 }}>
        <Fade bottom cascade durtion delay={2000}>
          <Typography
            sx={{
              mb: 3,
              fontWeight: 900,
              color: "#fff",
              fontFamily: "monospace",
              textAlign: "center",
            }}
            variant="h4"
          >
            Mening loyihalarim
          </Typography>
        </Fade>
        <Fade durtion delay={1000}>
          <Divider
            textAlign="center"
            color="white"
            sx={{
              width: "50%",
              margin: "0 auto",
              mb: 3,
              mt: 3,
            }}
          />
        </Fade>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
        >
          {extra.map((item, i) => (
            <Grid
              item
              md={3}
              lg={3}
              sm={3}
              xs={12}
              sx={{
                borderRadius: 3,
                p: 1,
                m: 1,
                textAlign: "center",
                backdropBlur: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <Slide bottom cascade>
                {item.icon}
                <Divider sx={{ pt: 2 }} />
                <Typography variant="h2" sx={{ fontFamily: "monospace" }}>
                  {item.text}
                </Typography>
                <Typography
                  variant="overline"
                  sx={{ fontSize: "12px", fontWeight: 600, color: "white" }}
                >
                  {item.text2}
                </Typography>
              </Slide>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ mt: 19 }}>
        <Fade bottom delay={2000}>
          <Typography
            sx={{
              fontWeight: 900,
              color: "#fff",
              fontFamily: "monospace",
              textAlign: "center",
            }}
            variant="h4"
          >
            O'quv tajribam haqida qisqacha
          </Typography>
        </Fade>
        <Fade bottom delay={1000}>
          <Divider
            textAlign="center"
            color="white"
            sx={{
              width: "50%",
              margin: "0 auto",
              mb: 3,
              mt: 3,
            }}
          />
        </Fade>

        <Drawer />
      </Box>
    </Container>
  );
}
