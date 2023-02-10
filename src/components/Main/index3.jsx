import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { Fade } from "react-reveal";
export default function Drawer() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        borderRadius: 3,
        p: 1,
        m: 1,

        backdropBlur: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      }}
    >
      <Fade bottom delay={2000}>
        <Accordion
          sx={{
            borderRadius: 3,
            p: 1,
            m: 1,

            backdropBlur: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                width: { xs: "38%", sm: "33%" },
                flexShrink: 0,
                color: "white",
                fontWeight: 700,
                fontFamily: "Roboto Mono",
              }}
            >
              2010-yil
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: { xs: "11px", md: "16px", sm: "16px" },
                fontFamily: "Roboto Mono",
              }}
            >
              Mening birinchi kompyuterim
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "Roboto Mono" }}>
              Ha, men birinchi kompyuterimi aynan 2010-yilda olganman, ya'ni
              sovg'a qilishgan. O'sha kun men eng baxtli bola edim. Chunki
              kompyuterim bor edi. Katta qiziqish bilan o'sha vaqtlar
              dasturlashni emas, o'yinlarni o'ynar edim😁. Sekin-sekin barchasi
              rivojlandi...
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Fade>
      <Fade bottom delay={2050}>
        <Accordion
          sx={{
            borderRadius: 3,
            p: 1,
            m: 1,

            backdropBlur: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            fontFamily: "Roboto Mono",
          }}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography
              sx={{
                flexShrink: 0,
                color: "white",
                fontWeight: 700,
                fontFamily: "Roboto Mono",
                width: { xs: "38%", sm: "33%" },
              }}
            >
              2012-yil
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontFamily: "Roboto Mono",
                fontSize: { xs: "11px", md: "16px", sm: "16px" },
              }}
            >
              1-sinf
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "Roboto Mono" }}>
              Hammasi shu yerda boshlangan. Barcha qiziqishlar, orzular va
              maqsadlar. Shu yerga kelganim kunidan kim bo'lishimni anglay
              boshladim. Maktab menga juda ko'p narsa berdi. Bilim, orzu qilish,
              hayotni sevish barcha-barchasi!😊
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Fade>
      <Fade bottom delay={2100}>
        <Accordion
          sx={{
            borderRadius: 3,
            p: 1,
            m: 1,

            backdropBlur: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography
              sx={{
                flexShrink: 0,
                fontFamily: "Roboto Mono",
                color: "white",
                fontWeight: 700,
                width: { xs: "38%", sm: "33%" },
              }}
            >
              Advanced settings
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontFamily: "Roboto Mono",
                fontSize: { xs: "11px", md: "16px", sm: "16px" },
              }}
            >
              Filtering has been entirely disabled for whole web server
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "Roboto Mono" }}>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Fade>
      <Fade bottom delay={2150}>
        <Accordion
          sx={{
            borderRadius: 3,
            p: 1,
            m: 1,
            fontFamily: "Roboto Mono",
            backdropBlur: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography
              sx={{
                width: { xs: "38%", sm: "33%" },
                flexShrink: 0,
                fontFamily: "Roboto Mono",
                color: "white",
                fontWeight: 700,
              }}
            >
              2016-2023-yillar
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontFamily: "Roboto Mono",
                fontSize: { xs: "11px", md: "16px", sm: "16px" },
              }}
            >
              Eng axmoq paytim va <b>Coding</b> paytim
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "Roboto Mono" }}>
              Mening axmoqona yosh oralig'im. Bu yoshda o'zim uchun qiziq
              bo'lgan barcha ishni qilib ko'rganman. Juda ko'p qizishlar
              so'ngan. Hozirda esa aynan shu portfolini yaratishda
              <b> PDP Academy</b> sharofati bilan katta ma'lumotlar to'play
              oldim. Ularga katta rahmat aytgan bo'lardim
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Fade>
    </Box>
  );
}
