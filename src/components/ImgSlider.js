import styled from "styled-components";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ImgSlider = (props) => {
    let settings = {
        dots: true,
        infinte: true,
        slideToShow: 1,
        slideToScroll: 1,
        autoplay: true,
    };

    return (
        <Container>
         <h1 className= "center">Carousel Using React</h1>
            <Carousel {...settings}>
                <Wrap>
                    <a>
                        <img src="/images/img1.jpg" alt="" />
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img src="/images/img2.jpg" alt="" />
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img src="/images/img3.jpg" alt="" />
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img src="/images/img4.jpg" alt="" />
                    </a>
                </Wrap>
            </Carousel>
        </Container>
    )
};

const Container = styled.div`
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
top: 20px;
padding: 0 calc(3..5vw + 5px);

&:after {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
}
`;

const Carousel = styled(Slider)`
    margin-top: 20px;

& > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
        opacity: 1;
        transition: opacity 0.2 ease 0s;
    }
}

ul li button {
    &:before{
        font-size: 10px;
        color: rgb(150, 158, 171);
    }
}

li.slick-active button:before {
    color: black;
}

.slick-list {
    overflow: initial;
}

.slick-prev {
    left: -75px;
}

.slick-next {
    right: -75px;
}

`;

const Wrap = styled.div`
    border-radius: 4px;
cursor: pointer;
position: relative;

a{
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;


    img {
        width: 100%;
        height: 600px;
        background-size: cover;
        justify-content: center;
        align-items: center;
    }

    &:hover {
        padding: 0;
        border:  4px solid ;
        transition-duration: 300ms;
    }
}
`;

export default ImgSlider;