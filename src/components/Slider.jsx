import { useState } from 'react';
import styled from 'styled-components';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import { slideData } from '../data';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.index * -100}vw);
  transition: all 1.2s ease;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  /* background-color: #f5fafd; */
  background-color: ${(props) => props.bg};
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  height: 85%;
`;

const InfoContainer = styled.div`
  margin-bottom: 50px;
  flex: 1;
`;

const Title = styled.h1`
  font-size: 78px;
  font-weight: 500;
`;

const Description = styled.p`
  margin: 40px 0px 50px 0px;
  font-size: 20px;
  font-weight: 500px;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Slider = ({}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const history = useNavigate();

  const handleClick = (direction) => {
    if (direction === 'left') {
      let index = slideIndex === 0 ? 2 : slideIndex - 1;
      setSlideIndex(index);
    } else if (direction === 'right') {
      let index = slideIndex === 2 ? 0 : slideIndex + 1;
      setSlideIndex(index);
    }
  };

  const handleShopNow = () => {
    history('/products');
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowBackIosOutlinedIcon />
      </Arrow>
      <Wrapper index={slideIndex}>
        {slideData.map((slide) => {
          return (
            <Slide bg={slide.bg} key={slide.id}>
              <ImageContainer>
                <Image src={slide.img} />
              </ImageContainer>
              <InfoContainer>
                <Title>{slide.title}</Title>
                <Description>{slide.desc}</Description>
                <Button onClick={handleShopNow}>SHOP NOW</Button>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowForwardIosOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
