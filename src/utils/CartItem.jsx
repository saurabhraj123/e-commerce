import styled from 'styled-components';
import { Remove, Add } from '@material-ui/icons';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  /* background-color: yellow; */
  padding: 0 30px;
  border-bottom: 1px solid #d6cfcf;
`;

const ImageContainer = styled.div`
  width: 150px;
  height: 150px;
  margin-right: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const LeftInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 19px;
`;

const Title = styled.div`
  padding: 5px;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const RightInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  font-size: 30px;
  padding-right: 50px;
`;

const ItemCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Count = styled.span``;

const Price = styled.span`
  margin-top: 10px;
  margin-right: 8px;
`;

const CartItem = ({ item }) => {
  //   const [quantity, setQuantity] = useState(item.quantity);
  //   const [price, setPrice] = useState(item.price);

  return (
    <Container>
      <ImageContainer>
        <Image src="https://www.libertyshoesonline.com/pub/media/catalog/product/cache/036e1f77cd3178c76f889f39e301037b/d/o/dooland_black_1.jpg" />
      </ImageContainer>
      <LeftInfo>
        <Title>
          <Bold>Product:</Bold> {item.name}
        </Title>
        <Title>
          <Bold>Id:</Bold> {item.id}
        </Title>
        <Title>
          <Bold>Size:</Bold>
          &nbsp;{item.size}
        </Title>
      </LeftInfo>
      <RightInfo>
        <ItemCount>
          <Remove style={{ cursor: 'pointer' }} />
          <Count>{item.quantity}</Count>
          <Add style={{ cursor: 'pointer' }} />
        </ItemCount>
        <Price>${item.price}</Price>
      </RightInfo>
    </Container>
  );
};

export default CartItem;
