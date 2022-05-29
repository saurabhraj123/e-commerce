import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';

const Container = styled.section``;
const Main = styled.main`
  padding: 10px;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 40px;
  margin-left: 15px;
`;

const FilterArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 15px;
`;

const Filter = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FilterText = styled.h2`
  font-size: 20px;
  font-weight: 500;
  /* margin-right: 5px; */
`;

const Select = styled.select`
  padding: 10px;
  width: ${(props) => props.size};
  margin-left: 10px;
`;

const Option = styled.option`
  padding: 10px;
`;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Main>
        <Title>Dresses</Title>
        <FilterArea>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select size="80px">
              <Option disabled selected>
                Color
              </Option>
              <Option>Black</Option>
              <Option>Blue</Option>
              <Option>Red</Option>
              <Option>White</Option>
              <Option>Yellow</Option>
            </Select>
            <Select size="70px">
              <Option disabled selected>
                Size
              </Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select size="70px">
              <Option disabled selected>
                Size
              </Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
        </FilterArea>
        <Products />
      </Main>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
