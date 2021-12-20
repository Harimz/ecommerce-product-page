import React from "react";
import { Avatar, Container, Image, List, ListItem, Spacer } from "./Styles";
import { GrCart } from "react-icons/gr";

import logo from "../../assets/images/logo.svg";
import avatar from "../../assets/images/image-avatar.png";

const Navbar = () => {
  return (
    <Container>
      <Image src={logo} />

      <List>
        <ListItem>Collections</ListItem>
        <ListItem>Men</ListItem>
        <ListItem>Women</ListItem>
        <ListItem>About</ListItem>
        <ListItem>Contact</ListItem>
      </List>

      <Spacer />

      <GrCart size={32} cursor="pointer" />
      <Avatar src={avatar} />
    </Container>
  );
};

export default Navbar;
