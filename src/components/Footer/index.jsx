import { Divider } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import FooterForm from "./FooterForm";
import "./style.css";

export default function Footer() {
  return (
    <>
      <Container sx={{ position: "sticky" }}>
        <div class="timelines">
          <div class="timeline education">
            <h2 class="timeline-title">Ta'lim</h2>
            <Divider
              textAlign="center"
              color="white"
              sx={{
                width: "50%",

                mb: 3,
                mt: 1.7,
              }}
            />
            <div class="timeline-items">
              <div class="timeline-item">
                <h3>Boshlang'ich ta'lim</h3>
                <time datetime="2017/2019">
                  2012 &ndash; Hozirgi kunga qadar
                </time>
                <div class="location">
                  Toshkent Umumiy o'rta ta'lim maktabi, Toshkent, O'zbekiston
                </div>
              </div>
              <div class="timeline-item">
                <h3>Umumiy dasturlash teoriyalari</h3>
                <time datetime="2020/2023">2020 &ndash; 2023</time>
                <div class="location">
                  FreeCodeCamp.org, W3Schools.com, Coursera.com, Udemy.com,
                </div>
              </div>
              <div class="timeline-item">
                <h3>Chuqurlashtirilgan Front(back)end kurslar</h3>
                <time datetime="2023/2023">
                  2022 &ndash; Hozirgi kunga qadar
                </time>
                <div class="location">PDP Academy, Tashkent, O'zbekiston</div>
              </div>
            </div>
          </div>

          <div class="timeline experience">
            <h2 class="timeline-title">Tajribam</h2>
            <Divider
              textAlign="center"
              color="white"
              sx={{
                width: "90%",
                mb: 3,
                mt: 1.7,
              }}
            />
            <div class="timeline-items">
              <div class="timeline-item">
                <h3>Sofware developer</h3>
                <time datetime="2020/2022">
                  2020 &ndash; Hozirgi kunga qadar
                </time>
                <div class="location">PDP Academy, Tashkent, O'zbekiston</div>
              </div>
              <div class="timeline-item">
                <h3>Junior dasturchi</h3>
                <time datetime="2023/2023">
                  2023 &ndash; Hozirgi kunga qadar
                </time>
                <div class="location">
                  Dublin Business School, Dublin, Ireland
                </div>
              </div>
              <div class="timeline-item">
                <h3>Junior dasturchi</h3>
                <time datetime="2023/2023">
                  2023 &ndash; Hozirgi kunga qadar
                </time>
                <div class="location">Toshkent, O'zbekiston</div>
              </div>
            </div>
          </div>
        </div>
        <FooterForm />
      </Container>
    </>
  );
}
