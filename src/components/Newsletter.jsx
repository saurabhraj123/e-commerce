import SendIcon from '@material-ui/icons/Send';
import styled from 'styled-components';

const Container = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fcf5f5;
`;

const Title = styled.h1`
  font-size: 75px;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 10px;
`;

const InputArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 35%;
  padding: 15px;
  font-size: 17px;
  border: none;
`;

const Button = styled.button`
  height: 100%;
  margin-left: 6px;
  width: 50px;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #037070;
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputArea>
        <Input placeholder="Enter your email" />
        <Button>
          <SendIcon />
        </Button>
      </InputArea>
    </Container>
  );
};

export default Newsletter;
