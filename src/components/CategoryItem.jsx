import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  margin: 4px;
  height: 70vh;
  position: relative;
  transition: all 0.25s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.05),
    rgba(0, 0, 0, 0.2)
  );
`;

const Title = styled.h1`
  color: white;
  font-weight: 500;
`;

const Button = styled.button`
  border: none;
  padding: 13px;
  cursor: pointer;
  margin-top: 10px;
  background-color: white;
  color: gray;
  font-weight: 400;
  &:hover {
    background-color: #f3f3f3;
  }
`;

const CategoryItem = ({ item }) => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    window.scroll(0, 0, 'smooth');
    navigate('/products');
  };

  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button onClick={handleShopNow}>Shop Now</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
