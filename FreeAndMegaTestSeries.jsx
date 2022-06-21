import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const image1 = "images/images/m2.jpeg";
const tick = "images/icons/Rightmark.png";
const leftarrow = "images/icons/lefticon.png";
const rightarrow = "images/icons/righticon.png";

const renderSlides = () =>
    [1, 2, 3, 4, 5, 6, 7, 8].map(num => (
      <div style={{margin:"0.66vw"}}>
      <StyledCard key={num}>
      <StyledImg src={image1} />
      <Container>
      <Headtext>XE - A : Mega Test Series {num}</Headtext>
      <Price>₹ 3,999</Price>
      </Container>
      <Enrol>1.2k students enrolled</Enrol>
      <Text><img src={tick} style={{transform: 'scale(0.75)', display:'inline'}} alt="tick mark" /> 4 Full Tests</Text>
      <Text><img src={tick} style={{transform: 'scale(0.75)', display:'inline'}} alt="tick mark" /> 0 Sectional Tests</Text>
      <Text><img src={tick} style={{transform: 'scale(0.75)', display:'inline'}} alt="tick mark" /> 8 Previous Tests</Text>
      <Text><img src={tick} style={{transform: 'scale(0.75)', display:'inline'}} alt="tick mark" /> 8 Mockups</Text>
      <Button>View Test</Button>
      </StyledCard>
      </div>
      
    ));
const FreeAndMegaTestSeries = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', minHeight:'0', minWidth:'0'}}>
    <div>
    <Heading>Free Test</Heading>
      <StyledCard style={{margin: '0.66vw'}}>
      <StyledImg src={image1} />
      <Container>
      <Headtext>XE - A : Mega Test Series</Headtext>
      <Price>₹ 3,999</Price>
      </Container>
      <Enrol>1.2k students enrolled</Enrol>
      <Text><img src={tick} style={{transform: 'scale(0.75)'}} alt="tick mark" /> 4 Full Tests</Text>
      <Text><img src={tick} style={{transform: 'scale(0.75)'}} alt="tick mark" /> 0 Sectional Tests</Text>
      <Text><img src={tick} style={{transform: 'scale(0.75)'}} alt="tick mark" /> 8 Previous Tests</Text>
      <Text><img src={tick} style={{transform: 'scale(0.75)'}} alt="tick mark" /> 8 Mockups</Text>
      <Button>View Test</Button>
      </StyledCard>
    </div>
    
    <div style={{position:'absolute', left:'23.33vw', width:'50%'}}>
      <Heading>Mega Test Series</Heading>
   
        <Slider
        arrows={true}
        slidesToShow={3}
        slidesToScroll={2}
        autoplay={false}
        infinite={true}
        prevArrow={<img src={leftarrow} alt="left arrow" />}
        nextArrow={<img src={rightarrow} alt="right arrow" />}
      >
        {renderSlides()}
      </Slider>
 
    </div>
    </div>
  );
};
const StyledCard = styled.div`
  width: 16vw;
  height: 65vh;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  @media screen and (max-width: 960px) {
    height: 40vh;
  }
  @media screen and (max-width: 750px) {
    height: 45vh;
  }
  @media screen and (max-width: 650px) {
    height: 42vh;
  }
  @media screen and (max-width: 500px) {
    height: 30vh;
  }
`;

const Heading = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 2.66vw;
  padding: 1.33vw;
  margin:1.33vw;
  color: #5F5F5F;
`;

const StyledImg = styled.img`
  position: relative;
  width: 15vw;
  top: 1vh;
  left: 50%;
  border-radius: 12px;
  transform: translateX(-50%);
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  position: relative;
  top: 2.9vh;
  left: 0.66vw;
  @media screen and (max-width: 960px) {
    top: 1.9vh;
  }
`;

const Headtext = styled.div`
  position: relative;
  width: 9vw;
  height: 7vh;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 1.1vw;
  color: #0B6E4F;
  @media screen and (max-width: 960px) {
    height: 4vh;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.4vw;
    height: 3vh;
  }
`;

const Price = styled.div`
  position: relative;
  width: 4.5vw;
  height: 7vh;
  left: 2vw;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 1.1vw;
  color: #696F79;
  @media screen and (max-width: 960px) {
    height: 4vh;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.4vw;
    height: 3vh;
  }
`;

const Enrol = styled.div`
  position: relative;
  width: 12vw;
  height: 5vh;
  left: 0.66vw;
  top: 2.9vh;
  margin:0px 0px 1vw 0px;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 0.95vw;
  color: #696F79;
  @media screen and (max-width: 960px) {
    top: 2.5vh;
    height: 2vh;
  }
  @media screen and (max-width: 650px) {
    top: 2.2vh;
    margin: 0 0 0.8vw 0;
  }
  @media screen and (max-width: 500px) {
    top:1.8vh;
    margin: 0 0 0.4vw 0;
    height: 1vh;
    font-size: 1.5vw;
  }
`;

const Text = styled.div`
  position: relative;
  width: 10vw;
  height: 4vh;
  left: 0.66vw;
  top: 2.9vh;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 0.8vw;
  color: #696F79;
  @media screen and (max-width: 960px) {
    width: 15vw;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.35vw;
    height: 3vh;
  }
`;

const Button = styled.button`
  position: absolute;
  bottom: 2vh;
  left: 3.5vw;
  background: linear-gradient(90deg, #FFE791 0%, #FED957 100.05%);
  box-shadow: 0px 3.16318px 10.2803px rgba(0, 0, 0, 0.25);
  color: #5F5F5F;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 0.9vw;
  padding: 0.5vw 2vw;
  border-radius: 8px;
  margin: 0px 0.2vw 0px 0.5vw;
  cursor: pointer;
  
`;    



export default FreeAndMegaTestSeries;
