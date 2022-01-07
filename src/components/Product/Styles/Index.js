import styled from "styled-components/macro";

export const Container = styled.div`
  max-width: 60rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  margin-top: 5rem;

  @media (max-width: 650px) {
    flex-direction: column;
    margin-top: 0;
  }
`;

export const ProductGallery = styled.div`
  width: 50%;

  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  position: relative;
  height: ${({ h }) => (h ? `${h}rem` : "30rem")};
  width: 100%;
  border-radius: 1rem;
  border: ${({ isSelected }) => (isSelected ? "2px" : 0)} solid orange;
  opacity: ${({ isSelected }) => (isSelected ? 0.5 : 1)};
  cursor: pointer;

  @media (max-width: 650px) {
    height: 20rem;
    border-radius: 0;
  }
`;

export const SelectView = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 650px) {
    display: none;
  }
`;
