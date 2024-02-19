import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFound = (props) => {
    return (
        <Container>
            <Content>
                <ErrorMessage>
                    <h1>The page you were looking for cannot be found.</h1>
                    <p>Please go to the Disney+ home page by clicking the button below</p>
                    
                    <Link to={"/"}>
                        <a>Disney+ Home</a>
                    </Link>
                </ErrorMessage>
                <BgImage />
            </Content>
        </Container>
    );
};

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100vh;
    text-align: center;
    background: var(--clr-black-60opacity);
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
`;

const ErrorMessage = styled.main`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.2;

    h1 {
        text-align: center;
        max-width: 30ch;
        margin-top: 2em;
    }

    p {
        font-size: var(--size-base);
        margin-bottom: 2em;
    }

    a {
        font-size: var(--size-base);
        font-weight: 600;
        background-color: var(--clr-royal-blue);
        padding: 1em 1em;
        border-radius: 12px;
        transition: background-color 0.2s ease-in-out;

        &:hover {
            background-color: var(--clr-dodger-blue);
        }
    }
`;

const BgImage = styled.div`
    height: 100%;
    background-image: url('/assets/images/404-background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
`;

export default NotFound;