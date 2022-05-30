import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import CartItem from '../utils/CartItem';
import { cartItems } from '../data';

const Container = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
`;

const Title = styled.h1`
  padding: 15px 0 0;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  padding-top: 10px;
  /* background-color: yellow; */
`;

const Button = styled.button`
  border: 2px solid black;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
  padding: 15px 20px;
  font-size: 13px;
  font-weight: 450;
  cursor: pointer;
`;

const Lists = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const List = styled.a`
  padding: 0 10px;
  color: #353333;
  font-weight: 500;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BottomLeft = styled.div`
  flex: 1;
`;

const BottomRight = styled.div`
  flex: 0.3;
  /* width: 30%; */
  margin-right: 20px;
  border: 2px solid #a7a4a4;
  border-radius: 20px;
  padding: 20px;
  height: 295px;
  align-self: center;
`;

const SummaryTitle = styled.div`
  font-size: 35px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  font-size: 14px;
  font-weight: 500;
`;

const InfoTitle = styled.h3``;
const Price = styled.p``;

const Total = styled.h3`
  font-size: 30px;
  font-weight: 600;
`;

const TotalPrice = styled.p`
  font-size: 30px;
  font-weight: 600;
`;

const Checkout = styled.button`
  display: flex;
  width: 100%;
  border: 2px solid black;
  color: white;
  background-color: black;
  padding: 15px 20px;
  font-size: 13px;
  text-align: center;
  font-weight: 450;
  justify-content: center;
  cursor: pointer;
`;

const Cart = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <Container>
        <Title>YOUR BAG</Title>
        <Top>
          <Button bg="white" color="black">
            CONTINUE SHOPPING
          </Button>
          <Lists>
            <List href="">Shopping Bag (2)</List>
            <List href="">Your WishList (0)</List>
          </Lists>
          <Button bg="black" color="white">
            CHECKOUT NOW
          </Button>
        </Top>
        <Bottom>
          <BottomLeft>
            {cartItems.map((item) => {
              return <CartItem item={item} key={item.id} />;
            })}
          </BottomLeft>
          <BottomRight>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <Info>
              <InfoTitle>Subtotal</InfoTitle>
              <Price>$80</Price>
            </Info>
            <Info>
              <InfoTitle>Estimated Shopping`</InfoTitle>
              <Price>$5.90</Price>
            </Info>
            <Info>
              <InfoTitle>Shipping Discount</InfoTitle>
              <Price>-$5.90</Price>
            </Info>
            <Info>
              <Total>Total</Total>
              <TotalPrice>$80</TotalPrice>
            </Info>
            <Checkout>CHECKOUT NOW</Checkout>
          </BottomRight>
        </Bottom>
      </Container>
      ;
      <Footer />
    </>
  );
};

export default Cart;
