import styled from "styled-components/macro";

export const Container = styled.nav`
  max-width: 90rem;
  width: 90%;
  padding: 1rem;
  margin: 0 auto;
  border-bottom: 1px solid gray;
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
`;

export const ListItem = styled.li``;

export const Spacer = styled.div`
  width: 100%;
`;

export const Avatar = styled.img`
  height: 4rem;
  margin-left: 2rem;
`;
