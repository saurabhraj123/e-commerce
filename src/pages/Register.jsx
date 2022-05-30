import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('https://images.pexels.com/photos/160751/breeze-summer-girl-model-160751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 41%;
  background: white;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px #e7faff;
`;

const Title = styled.h1`
  align-self: flex-start;
  font-size: 25px;
  margin-bottom: 15px;
  margin-top: 10px;
`;

const InputArea = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Input = styled.input`
  width: 43%;
  padding: 7px 10px;
  margin: 10px 6px;
  font-size: 17px;
  font-weight: 400;
`;
const Info = styled.span`
  margin-top: 10px;
  font-size: 15px;
  font-weight: 300;
`;

const Button = styled.button`
  align-self: flex-start;
  margin-top: 15px;
  padding: 15px 80px;
  border: none;
  color: white;
  background: teal;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Register = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <InputArea>
            <Input placeholder="first name" type="text" />
            <Input placeholder="last name" type="text" />
            <Input placeholder="username" type="text" />
            <Input placeholder="email" type="email" />
            <Input placeholder="password" type="password" />
            <Input placeholder="confirm password" type="password" />
          </InputArea>
          <Info>
            By creating an account, I consent to the processing of my personal
            data in accordance with <Bold>PRIVACY POLICY.</Bold>
          </Info>
          <Button>CREATE</Button>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;
