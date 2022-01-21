import styled from "styled-components/macro";

export const Container = styled.div`
  max-width: 75rem;
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
  width: 40%;

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

export const DetailsContainer = styled.div`
  width: 60%;
  padding: 6rem;

  @media (max-width: 650px) {
    padding: 1rem;
    width: 100%;
  }
`;

export const SubHeader = styled.h3`
  color: var(--primary);
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Header = styled.h1`
  font-size: ${({ size }) => size + "rem"};
  margin-bottom: ${({ mb }) => mb + "rem"};

  @media (max-width: 650px) {
    font-size: 2rem;
  }
`;

export const Text = styled.p`
  color: var(--dark-gray-blue);
  font-size: 1.25rem;
  line-height: 30px;
  margin-bottom: 2rem;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 2rem;

  @media (max-width: 650px) {
    flex-direction: ${({ mobileDir }) => (mobileDir ? mobileDir : "row")};
  }
`;

export const ColoredBox = styled.div`
  background: var(--secondary);
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

export const SaleHeader = styled.p`
  color: var(--primary);
  font-weight: bold;
  font-size: 1.5rem;
`;

export const CrossedOutText = styled.p`
  text-decoration-line: line-through;
  color: var(--gray-blue);
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 0.75rem;
  margin-bottom: 2rem;
`;

export const AddInput = styled.div`
  background: var(--light-gray-blue);
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  border-radius: 1rem;

  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const InputButton = styled.p`
  font-weight: bold;
  color: var(--primary);
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.5);
  }
`;

export const Button = styled.button`
  background: var(--primary);
  border: none;
  padding: 1.25rem;
  width: 60%;
  border-radius: 1rem;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  grid-gap: 1rem;
  font-weight: bold;
  font-size: 1.15rem;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 650px) {
    width: 100%;
  }
`;
