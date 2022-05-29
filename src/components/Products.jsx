import styled from 'styled-components';
import { products } from '../data';
import Product from './Product';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  /* background-color: #f5f5f5; */
  flex-wrap: wrap;
  align-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {products.map((item) => {
        return <Product item={item} key={item.id} />;
      })}
    </Container>
  );
};

export default Products;
