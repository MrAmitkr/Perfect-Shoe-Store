import { Box, Image } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
import sliderImage1 from "../../Asssets/SliderImage1.jpg";
import sliderImage2 from "../../Asssets/SliderImage2.gif";
import sliderImage3 from "../../Asssets/SliderImage3.jpg";
import sliderImage4 from "../../Asssets/SliderImage4.gif";
import sliderImage5 from "../../Asssets/SliderImage5.jpg";

export default class HomeSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
        marginTop={3}
      >
        <Slider {...settings}>
          <Box borderRadius={"8px"}>
            <a href="https://www.bing.com/shop?q=shoes+websits&FORM=SHOPTB"> 
             <Image
              borderRadius={"8px"}
              margin={"auto"}
              width={"100%"}
              src={sliderImage2}
            /></a>
          
          </Box>
         
          <Box borderRadius={"8px"}>
          <a href="https://www.nike.com/in/launch/t/air-jordan-1-next-chapter">
          <Image
              borderRadius={"8px"}
              margin={"auto"}
              width={"100%"}
              src={sliderImage1}
            
            />
          </a>
           
          </Box>
          <Box borderRadius={"8px"}>
            <a href="https://www.adidas.co.in/">
            <Image
              borderRadius={"8px"}
              margin={"auto"}
              width={"100%"}
              src={sliderImage3}
            />
            </a>
            
          </Box>
          <Box borderRadius={"8px"}>
            <a href="https://www.bing.com/shop?q=sneakers&FORM=SHOPTB">
            <Image
              borderRadius={"8px"}
              margin={"auto"}
              width={"100%"}
              src={sliderImage4}
            />
            </a>
            
          </Box>
          <Box borderRadius={"8px"}>
            <a href="https://www.reebok.in/">
            <Image
              borderRadius={"8px"}
              margin={"auto"}
              width={"100%"}
              src={sliderImage5}
            />

            </a>
           
          </Box>
        </Slider>
      </Box>
    );
  }
}
