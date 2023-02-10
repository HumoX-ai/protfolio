import {
  faJsSquare,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { Fade } from "react-reveal";

const icons = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faReact} size="6x" color="#00d8ff" />,
    text: "React JavaScript kutubxonasi bo'lib, 2013-yilda Facebook tomonidan yopiq tizimda ishga tushgan keyinchalik esa ommaga taqdim etildi. Men React bilan shug'ullanganimga 5 oy bo'ldi va bu texnologiyani hali ham o'rganyapman",
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faJsSquare} size="6x" color="#ffbf00" />,
    text: "JavaScript ko'p paradigmali dasturlash tilidir. Ob'ektga yo'naltirilgan, imperativ va funktsional uslublarni qo'llab-quvvatlaydi. Bu ECMAScript spetsifikatsiyasining amalga oshirilishi. JavaScript odatda dastur ob'ektlariga dasturiy kirish uchun o'rnatilgan til sifatida ishlatiladi. 1995-yilda tashkil topgan. Mening eng yoqtirgan dasturlash tilim 🙂",
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faNode} size="6x" color="#3c873a" />,
    text: "Node yoki Node.js JavaScript-ni yuqori ixtisoslashgan tildan umumiy maqsadli tilga aylantiruvchi V8 dvigateliga asoslangan dasturiy platformadir. Ya`ni  Node.js ochiq manbali, o'zaro platformali JavaScript ish vaqti muhiti va mijoz brauzeridan tashqarida veb-ilovalarni ishga tushirish uchun kutubxona. Rayan Dahl uni 2009-yilda ishlab chiqdi.",
  },
];
export default function Main2() {
  return (
    <>
      <Box sx={{ pt: 19, textAlign: "center" }}>
        <Box>
          <Fade bottom delay={1000}>
            <FontAwesomeIcon icon={faLaptopCode} size="7x" color="#234e70" />
          </Fade>
        </Box>

        <Fade bottom delay={2000}>
          <Typography
            sx={{
              fontWeight: 900,
              color: "#fff",
              fontFamily: "monospace",
              mt: 3,
            }}
            variant="h4"
          >
            Mening ko'nikmalarim
          </Typography>
        </Fade>
        <Fade bottom delay={1000} duration={1000}>
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
      </Box>

      <Box sx={{ mt: 5 }}>
        <Fade bottom cascade>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="stretch"
            textAlign="center"
          >
            {icons.map((icons, i) => (
              <Grid
                key={i}
                item
                md={3}
                lg={3}
                sm={5}
                xs={12}
                sx={{
                  borderRadius: 3,
                  p: 1,
                  m: 1,

                  backdropBlur: "blur(10px)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <Fade bottom cascade duration={2000}>
                  {icons.icon}
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white", fontWeight: 500 }}
                  >
                    {icons.text}
                  </Typography>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Fade>
      </Box>
    </>
  );
}
