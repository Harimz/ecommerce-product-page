import React, { useState } from "react";
import {
  Avatar,
  Container,
  Image,
  List,
  ListItem,
  Spacer,
  Icon,
  MobileNav,
} from "./Styles";
import { GrCart } from "react-icons/gr";
import { FaBars } from "react-icons/fa";

import logo from "../../assets/images/logo.svg";
import avatar from "../../assets/images/image-avatar.png";
import MobileModal from "./MobileModal";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <Icon onClick={() => setShowModal(true)}>
        <FaBars color="var(--dark-gray-blue)" className="bars" />
      </Icon>

      <Image src={logo} />

      <List>
        <ListItem>Collections</ListItem>
        <ListItem>Men</ListItem>
        <ListItem>Women</ListItem>
        <ListItem>About</ListItem>
        <ListItem>Contact</ListItem>
      </List>

      <Spacer />

      <Icon>
        <GrCart size={32} cursor="pointer" className="cart" />
      </Icon>

      <Icon>
        <Avatar src={avatar} className="avatar" />
      </Icon>

      <MobileModal showModal={showModal} setShowModal={setShowModal} />
    </Container>
  );
};

export default Navbar;
