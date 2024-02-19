import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const ImgSlider = (props) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <Carousel {...settings}>
            <Wrap>
                <a href="#">
                    <img src="/assets/images/slider-badging.jpg" alt="" />
                </a>
            </Wrap>

            <Wrap>
                <a href="#">
                    <img src="/assets/images/slider-scale.jpg" alt="" />
                </a>
            </Wrap>

            <Wrap>
                <a href="#">
                    <img src="/assets/images/slider-badag.jpg" alt="" />
                </a>
            </Wrap>

            <Wrap>
                <a href="#">
                    <img src="/assets/images/slider-scales.jpg" alt="" />
                </a>
            </Wrap>
        </Carousel>
    ); 
};

const Carousel = styled(Slider)`
    margin-top: 20px;

    & > button {
        opacity: 0;

        &:hover {

        }
    }
`;

const Wrap = styled.div`

`;

export default ImgSlider;



