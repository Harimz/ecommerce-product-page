import styled from "styled-components/macro";
import { motion } from "framer-motion";

export const Container = styled.nav`
  max-width: 90rem;
  width: 90%;
  padding: 2rem 0;
  margin: 0 auto;
  border-bottom: 1px solid var(--gray-blue);
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  margin-right: 3rem;
`;

export const List = styled.ul`
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;

  @media (max-width: 650px) {
    display: none;
  }
`;

export const ListItem = styled.li`
  position: relative;
  color: var(--dark-gray-blue);
  cursor: pointer;
  font-size: 1.1rem;

  &:after {
    content: "";
    position: absolute;
    background-color: var(--primary);
    height: 3px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }

  @media (max-width: 650px) {
    color: black;
  }
`;

export const Spacer = styled.div`
  width: 100%;
`;

export const Avatar = styled.img`
  height: 4rem;
  margin-left: 2rem;

  @media (max-width: 650px) {
    height: 2rem;
    margin: 0;
  }
`;

export const Icon = styled.div`
  .bars {
    display: none;
  }

  .cart {
    height: 2rem;
  }

  .times {
    margin-bottom: 2rem;
  }

  @media (max-width: 650px) {
    .bars {
      display: block;
      margin-right: 1rem;
    }

    .cart {
      height: 1rem;
    }
  }
`;

export const MobileNav = styled.div`
  position: absolute;
  height: 100vh;
  width: 75%;
  background: white;
`;

export const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const Menu = styled(motion.div)`
  position: absolute;
  width: 75%;
  padding: 2rem;
  background: white;
  height: 100vh;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: bold;
`;
