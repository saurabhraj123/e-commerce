import styled from 'styled-components';
import CategoryItem from './CategoryItem';
import { catData } from '../data';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  /* width: 100%; */
`;

const Categories = () => {
  return (
    <Container>
      {catData.map((item) => {
        return <CategoryItem item={item} />;
      })}
    </Container>
  );
};

export default Categories;
