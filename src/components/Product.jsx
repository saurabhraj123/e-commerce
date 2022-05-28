import styled from 'styled-components';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

const Container = styled.div`
  /* flex: 1; */
  margin: 10px;
  width: 300px;
  height: 350px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Icons = styled.div`
  display: flex;
  /* background-color: yellow; */
  visibility: hidden;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: black;
    opacity: 70%;
  }
  &:hover ${Icons} {
    visibility: visible;
    opacity: 1;
  }
`;

const Icon = styled.div`
  margin: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.15s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icons>
          <Icon>
            <AddShoppingCartOutlinedIcon />
          </Icon>
          <Icon>
            <SearchIcon />
          </Icon>
          <Icon>
            <FavoriteBorderOutlinedIcon />
          </Icon>
        </Icons>
      </Info>
    </Container>
  );
};

export default Product;
