import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
  /* background-color: yellow; */
  padding: 20px;
`;

const Left = styled.div`
  flex: 1;
  margin-left: 50px;
`;

const Title = styled.h1`
  font-weight: 550;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 15px;
  text-align: justify;
  font-weight: 300;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  /* width: 270px; */
  /* height: 270px; */
`;

const Icon = styled.div`
  color: white;
  background-color: ${(props) => props.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 5px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  margin-left: 150px;
  margin-right: 100px;
`;

const Other_Title = styled.h2`
  font-size: 25px;
  width: 50%;
  margin-right: 0;
  margin-bottom: 10px;
  padding-top: 7px;
  font-weight: 450;
`;
const Link_Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: justify-content;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Link = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  font-weight: 300;
`;

const Right = styled.div`
  flex: 1;
  /* background-color: blue; */
`;

const C_Detail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  font-weight: 300;
`;
const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Title>E-Commerce</Title>
        <Description>
          There are many variation of passsages of Lorem. Here we go now. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, error
          iure non nam illo repellendus. Hello Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Modi esse fugit nesciunt voluptas.
        </Description>
        <Icons>
          <Icon bg="#39599F">
            <FacebookIcon />
          </Icon>
          <Icon bg="#55AAF0">
            <TwitterIcon />
          </Icon>
          <Icon bg="#EA3F61">
            <InstagramIcon />
          </Icon>
        </Icons>
      </Left>
      <Center>
        <Other_Title>Useful Links</Other_Title>
        <Link_Container>
          <Link>Home</Link>
          <Link>Cart</Link>
          <Link>Man Fashion</Link>
          <Link>Woman Fashion</Link>
          <Link>Accessories</Link>
          <Link>My Account</Link>
          <Link>Order Tracking</Link>
          <Link>Wishlist</Link>
          <Link>Jobs</Link>
          <Link>Terms</Link>
        </Link_Container>
      </Center>
      <Right>
        <Other_Title>Contact</Other_Title>
        <C_Detail>
          <LocationOnIcon style={{ marginRight: '8px' }} /> At Rauza, Ward No.
          44, Chapra, Bihar
        </C_Detail>
        <C_Detail>
          <PhoneIcon style={{ marginRight: '8px' }} /> +91 7004829415
        </C_Detail>
        <C_Detail>
          <MailOutlineIcon style={{ marginRight: '8px' }} />{' '}
          me4saurabh4u@gmail.com
        </C_Detail>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
