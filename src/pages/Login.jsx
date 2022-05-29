import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('https://images.pexels.com/photos/160751/breeze-summer-girl-model-160751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 20px 10px;
  background-color: white;
  width: 28%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-bottom: 8px;
  text-align: center;
`;

const Input = styled.input`
  /* width: 50%; */
  padding: 8px;
  margin: 5px;
  font-size: 17px;
  font-weight: 400;
`;

const Button = styled.button`
  margin-top: 15px;
  padding: 15px 80px;
  border: none;
  color: white;
  background: teal;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: #353333;
  font-size: 13px;
  margin: 5px;
  margin: auto;
  padding: 3px;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Form>
          <Title>SIGN IN</Title>
          <Input placeholder="email" type="email" />
          <Input placeholder="password" type="password" />
          <Button>LOGIN</Button>
          <Link href="#">FORGOT PASSWORD?</Link>
          <Link href="#">CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
