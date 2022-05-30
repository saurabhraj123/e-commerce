import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const Container = styled.div``;

const Main = styled.main`
  display: flex;
  /* background: red; */
  justify-content: space-between;
  padding: 20px;
`;

const ImageContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  /* flex: 1; */
  /* height: 100%; */
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
`;
const Title = styled.h1``;

const Description = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <Container>
        <Main>
          <ImageContainer>
            <Image src="https://rukminim2.flixcart.com/image/668/802/kmi2g7k0/jumpsuit/a/u/d/xxl-3810blucaroljs-stylestone-original-imagfdccgtvjyyvf.jpeg?q=50" />
          </ImageContainer>
          <InfoContainer>
            <Title>Denim Jumpsuit</Title>
            <Description>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit, reiciendis, nesciunt suscipit pariatur culpa
              eligendi voluptates harum inventore possimus fugit maxime rem
              natus quam deserunt necessitatibus saepe quo, maiores beatae?
            </Description>
            <Price>$20</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black" />
                <FilterColor color="darkblue" />
                <FilterColor color="gray" />
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                  <FilterSizeOption>XXL</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove />
                <Amount>1</Amount>
                <Add />
              </AmountContainer>
              <Button>Add to Cart</Button>
            </AddContainer>
          </InfoContainer>
        </Main>
        <Newsletter />
        <Footer />
      </Container>
    </>
  );
};

export default Product;
