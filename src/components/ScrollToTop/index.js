// This is ScrollToTop component, To scroll from anywhere to top
import arrow from '../../assets/arrow-up.svg';
import styled from 'styled-components';

const Up = styled.div`
    position: fixed;
    right: 5rem;
    bottom: 5rem;
    cursor: pointer;

    img {
        width: 3rem;
        height: 3rem;
        background-color: var(--white);
        border-radius: 50%;
        border: 2px solid var(--white);
        transition: transform 0.3s;

        &:hover {
            transform: scale(1.2);
        }
        &:active {
            transform: scale(0.9);
        }
    }
`;

const ScrollToTop = () => {
    const ScrollUp = () => {
        const element = document.getElementById('home');
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest',
        });
    };

    return (
        <Up onClick={() => ScrollUp()}>
            <img src={arrow} alt='Scroll up' />
        </Up>
    );
};

export default ScrollToTop;
