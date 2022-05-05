// This is HeroSection component, Main top section of website
import styled from 'styled-components';
import Pink from '../../assets/blobPink.png';
import White from '../../assets/blobWhite.png';
import Purple from '../../assets/blobPurple.png';
import Arrow from '../../assets/Arrow Right.svg';
import Mobile from '../../assets/mobile.png';
import { keyframes } from 'styled-components';

const move = keyframes`
	0% { transform: translateY(-5px)}
	50% { transform: translateY(10px)}
	100% { transform: translateY(-5px)}
`;

const Herosection = styled.div`
    width: 100vw;
    height: 45vw;
    background-color: var(--black);
    color: var(--white);
    display: flex;
    justify-content: center;
    position: relative;

    @media only Screen and (max-width: 48em) {
        height: 70vw;
        display: block;
    }
`;
const Blobs = styled.div`
    position: absolute;
    width: 100%;
    right: 0;
    @media only Screen and (max-width: 48em) {
        opacity: 0.5;
    }
`;
const PinkBlobs = styled.div`
    width: calc(15% + 15vw);
    position: absolute;
    right: 0;
    top: calc(5rem + 5vw);
    z-index: 6;
`;
const WhiteBlobs = styled.div`
    width: calc(20% + 20vw);
    position: absolute;
    right: calc(3.5rem + 3.5vw);
    top: calc(2rem + 2vw);
    z-index: 5;
`;
const PurpleBlobs = styled.div`
    width: calc(10% + 10vw);
    position: absolute;
    right: 0;
`;
const MainContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70vw;

    @media only Screen and (max-width: 48em) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
    }
`;
const LeftBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    line-height: 1.5;

    @media only Screen and (max-width: 48em) {
        width: 80%;
        text-align: center;
        align-items: center;
        justify-content: space-around;
        margin-top: calc(2.5rem + 2.5vw);
        filter: drop-shadow(2px 4px 6px var(--black));
    }
`;
const Topic = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--nav);
    font-weight: 700;
    font-size: calc(0.4rem + 0.4vw);
    padding: 0.5rem 1.5rem;
    border-radius: 20px;
`;
const Circle = styled.span`
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: var(--purple);
    margin-right: 0.5rem;
`;
const Title = styled.h1`
    font-size: calc(1rem + 1vw);
    line-height: 1.2;
    padding: 0.5rem 0;
`;
const SubText = styled.h5`
    font-size: calc(0.5rem + 0.5vw);
    color: var(--nav2);
`;
const CTA = styled.button`
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    border-radius: 20px;
    cursor: pointer;
    font-size: calc(0.5rem + 0.5vw);
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;
    &:active {
        transform: scale(0.9);
    }
    &:hover {
        transform: scale(1.1);
    }

    img {
        width: 1.5rem;
    }
`;
const MobileSVG = styled.img`
    max-width: 30%;
    width: calc(30% + 20vw);
    z-index: 7;
    height: auto;
    animation: ${move} 2.5s ease-in infinite;

    @media only Screen and (max-width: 48em) {
        align-self: flex-start;
        position: absolute;
        bottom: 0;
        opacity: 0.5;
    }
    @media only Screen and (max-width: 40em) {
        display: none;
    }
`;

const HeroSection = () => {
    return (
        <Herosection id='home'>
            <Blobs>
                <PinkBlobs>
                    <img src={Pink} alt='Pink Blob' width='400' height='400' />
                </PinkBlobs>
                <WhiteBlobs>
                    <img
                        src={White}
                        alt='White Blob'
                        width='400'
                        height='400'
                    />{' '}
                </WhiteBlobs>
                <PurpleBlobs>
                    <img
                        src={Purple}
                        alt='Purple Blob'
                        width='400'
                        height='400'
                    />
                </PurpleBlobs>
            </Blobs>
            <MainContent>
                <LeftBlock>
                    <Topic>
                        <Circle />
                        <span>We Build Webs </span>
                    </Topic>
                    <Topic>
                        <Circle />
                        <span>Window Applications</span>
                    </Topic>
                    <Title>Bring your ideas into reality</Title>
                    <SubText>We are Your Software Solutions</SubText>
                    <CTA>
                        Get in Touch &nbsp;{' '}
                        <img src={Arrow} alt='CTA' width='400' height='400' />
                    </CTA>
                </LeftBlock>
                <MobileSVG
                    src={Mobile}
                    alt='Mobile SVG'
                    width='400'
                    height='400'
                />
            </MainContent>
        </Herosection>
    );
};

export default HeroSection;
