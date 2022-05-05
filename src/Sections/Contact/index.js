// This is Contact component, it will contain contact form.
import styled from 'styled-components';
import Facebook from '../../assets/facebook-square-brands.svg';
import Instagram from '../../assets/instagram-square-brands.svg';
import Github from '../../assets/github-square-brands.svg';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';

const ContactSection = styled.section`
    width: 100vw;
    padding: calc(2.5rem + 2.5vw) 0;
    background-color: #0a0b10;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    justify-content: center;
`;
const Title = styled.h1`
    color: var(--white);
    display: inline-block;
    font-size: 2rem;
    margin-bottom: 3rem;
    position: relative;
    &::before {
        content: '';
        height: 1px;
        width: 50%;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 0.5rem);
        /* or 100px */
        border-bottom: 2px solid var(--pink);
    }
`;
const Icons = styled.div`
    display: flex;
    margin-bottom: 3rem;
    a {
        &:hover {
            img {
                filter: invert(20%) sepia(100%) saturate(500%)
                    hue-rotate(580deg) brightness(100%) contrast(97%);
            }
        }
        &:not(:last-child) {
            margin-right: 2rem;
        }
        img {
            width: 3rem;
            height: 3rem;
        }
    }
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    input {
        padding: 1rem calc(0.5rem + 1vw);
        margin-bottom: 1rem;
        background-color: var(--nav2);
        border: none;
        border-radius: 4px;
        color: #eff7f8;
        &:active,
        &:focus {
            border: none;
            outline: none;
            background-color: var(--nav);
        }
        &::placeholder {
            color: #eff7f8;
            opacity: 0.6;
        }
        &[name='name'] {
            margin-right: 2rem;
        }
    }
    textarea {
        padding: 1rem calc(0.5rem + 1vw);
        margin-bottom: 1rem;
        background-color: var(--nav2);
        border: none;
        border-radius: 4px;
        color: #eff7f8;
        margin-bottom: 2rem;
        &:focus,
        &:active {
            background-color: var(--nav);
        }
        &::placeholder {
            color: #eff7f8;
            opacity: 0.6;
        }
    }
    button {
        padding: 0.8rem 2rem;
        background-color: var(--white);
        border-radius: 20px;
        font-size: 1.2rem;
        color: #0a0b10;
        cursor: pointer;
        transition: transform 0.3s;
        &:hover {
            transform: scale(1.1);
        }
        &:active {
            transform: scale(0.9);
        }
    }
`;
const Row = styled.div`
    @media only Screen and (max-width: 40em) {
        display: flex;
        flex-direction: column;
        input {
            &[name='name'] {
                margin-right: 0;
            }
        }
    }
`;
const Contact = () => {
    const [email, setEmail] = useState('');
    const [cusName, setCusName] = useState('');
    const [message, setMessage] = useState('');
    const [notification, setNotification] = useState('');
    const [severity, setSeverity] = useState('');
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangeMessage(e) {
        setMessage(e.target.value);
    }

    function handleChangeName(e) {
        setCusName(e.target.value);
    }

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
    });

    function sendEmail(e) {
        const regex =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (
            email.length === 0 ||
            cusName.length === 0 ||
            message.length === 0
        ) {
            setOpen(true);
            setSeverity('error');
            setNotification('Null Information');
        } else if (!regex.test(email)) {
            setOpen(true);
            setSeverity('error');
            setNotification('Invalid Email');
        } else {
            e.preventDefault();
            setOpen(true);
            setSeverity('success');
            setNotification('Send Message Successed');
            emailjs
                .sendForm(
                    'service_iwaqf4b',
                    'template_t5pfg8n',
                    document.getElementById('myForm'),
                    'rVkSQQafoK9_a38BB'
                )
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => console.log(err));
        }
    }

    return (
        <ContactSection id='contact'>
            <Title>Get in Touch</Title>
            <Icons>
                <a href='https://www.facebook.com/phchng2398/'>
                    <img src={Facebook} alt='facebook' />
                </a>
                <a href='https://www.instagram.com/ngphhng/'>
                    <img src={Instagram} alt='instagram' />
                </a>
                <a href='https://github.com/NgnPhcHung'>
                    <img src={Github} alt='github' />
                </a>
            </Icons>
            <Form id='myForm'>
                <Row>
                    <input
                        name='name'
                        type='text'
                        placeholder='your name'
                        onChange={handleChangeName}
                        value={cusName}
                    />
                    <input
                        name='email'
                        type='email'
                        value={email}
                        onChange={handleChangeEmail}
                        placeholder='enter working email id'
                    />
                </Row>
                <textarea
                    name='message'
                    id=''
                    cols='30'
                    rows='2'
                    value={message}
                    onChange={handleChangeMessage}
                    placeholder='your message'
                ></textarea>
                <div style={{ margin: '0 auto' }}>
                    <button onClick={sendEmail}>Submit</button>
                </div>
            </Form>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity}>
                    {notification}
                </Alert>
            </Snackbar>
        </ContactSection>
    );
};

export default Contact;
