import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

export default function Footer() {
  return (
    <>
      <Container sx={{ position: "sticky" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quidem
        voluptatum hic repellendus asperiores fuga! Tempore, quia id! Ab autem
        dolorem excepturi aut consequatur perspiciatis eos in sit quae,
        repudiandae perferendis doloremque exercitationem libero totam magni
        mollitia eveniet tenetur tempore ipsam inventore corporis nisi nihil
        cumque? Deleniti iste, repudiandae consectetur quis cum cupiditate
        libero voluptate iusto praesentium, saepe cumque reprehenderit.
        <br />
        <br />
        <Typography sx={{ fontFamily: "roboto" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          nesciunt minima maxime cumque nobis facilis numquam iure laborum
          repellendus possimus distinctio, id, inventore alias animi quis
          deleniti, ex placeat! Cum?
        </Typography>
      </Container>
    </>
  );
}
