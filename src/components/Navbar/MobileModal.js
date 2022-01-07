import { AnimatePresence } from "framer-motion";
import React from "react";
import { Backdrop, Icon, List, ListItem, Menu, NavList } from "./Styles";
import { FaTimes } from "react-icons/fa";

const backdropVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: "0vw",
    opacity: 1,
    transition: { delay: 0.25, stiffness: 300 },
  },
};

const MobileModal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence>
      {showModal && (
        <Backdrop
          variants={backdropVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Menu variants={modalVariants}>
            <Icon onClick={() => setShowModal(false)}>
              <FaTimes className="times" />
            </Icon>

            <NavList>
              <ListItem>Collections</ListItem>
              <ListItem>Men</ListItem>
              <ListItem>Women</ListItem>
              <ListItem>About</ListItem>
              <ListItem>Contact</ListItem>
            </NavList>
          </Menu>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

export default MobileModal;
