// This is Testimonials component

import styled from 'styled-components';
import Slider from 'react-slick';

import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import Card from '../../components/Card';

const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 5rem 0;
`;
const Title = styled.h1`
    display: inline-block;
    font-size: calc(1rem + 1.5vw);
    margin-top: 1rem;
    position: relative;

    &::before {
        content: '';
        height: 1px;
        width: 50%;
        position: absolute;
        left: 50%;
        bottom: 0;
        border-bottom: 2px solid var(--purple);
        transform: translate(-50%);
    }
`;
const Carousel = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: 40em) {
        width: 90vw;
    }

    .slick-slider .slick-arrow:before {
        color: var(--black);
        font-size: 1.5rem;
        @media only screen and (max-width: 40em) {
            display: none;
        }
    }
    .slick-slider .slick-dots button:before {
        color: var(--black);
        font-size: 1.5rem;
    }
    .slick-slide.slick-active {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0;
        padding: 0;
        margin-bottom: 3rem;
    }
`;

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Section>
            <Title>Few good words about us!</Title>
            <Carousel>
                <Slider {...settings}>
                    <Card
                        text='Product of this company are so powerful. It make me exited while used it. I Love it so much.'
                        name='Elon Musk'
                        image='ElonMusk'
                    />
                    <Card
                        text='I just want to say that: "Tuyet voi het nuoc cham".'
                        name='Detective Hattori'
                        image='hattori'
                    />
                    <Card
                        text='Nguyen Phuc Hung is very handsome, I love him so much'
                        name='Emma Watson'
                        image='emmawatson'
                    />
                </Slider>
            </Carousel>
        </Section>
    );
};

export default Testimonials;
