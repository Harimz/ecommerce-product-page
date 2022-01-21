import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import {
  AddInput,
  Button,
  ColoredBox,
  CrossedOutText,
  DetailsContainer,
  Flex,
  Header,
  InputButton,
  SaleHeader,
  SubHeader,
  Text,
} from "./Styles/Index";

const CartProduct = () => {
  const [itemAmount, setItemAmount] = useState(0);

  return (
    <DetailsContainer>
      <SubHeader>SNEAKER COMPANY</SubHeader>
      <Header size="3" mb="2">
        Fall Limited Edition Sneakers
      </Header>
      <Text>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer
      </Text>
      <Flex>
        <Header size="2">$125.00</Header>
        <ColoredBox>
          <SaleHeader>50%</SaleHeader>
        </ColoredBox>
      </Flex>
      <CrossedOutText>$250</CrossedOutText>
      <Flex mobileDir="column">
        <AddInput>
          <InputButton
            onClick={() => {
              if (itemAmount > 0) {
                setItemAmount((state) => state - 1);
              }
            }}
          >
            -
          </InputButton>
          <Header size="1.5">{itemAmount}</Header>
          <InputButton
            onClick={() => {
              if (itemAmount < 5) {
                setItemAmount((state) => state + 1);
              }
            }}
          >
            +
          </InputButton>
        </AddInput>

        <Button>
          <FaShoppingCart />
          <p>Add to cart</p>
        </Button>
      </Flex>
    </DetailsContainer>
  );
};

export default CartProduct;
