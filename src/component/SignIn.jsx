import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SignIn = (props) => {
    // Used to create a Controlled Component.
    const [name, setName] = useState("");

    return (
        <Container>
            <Content>
                <Logo>
                    <img src="/assets/images/logo.svg" alt="Disney+" draggable="false" />
                </Logo>

                <SignInContainer>
                    <SignInForm>
                        <h1>Welcome Back {name}</h1>
                        <input onChange={(event) => setName(event.target.value)} type="text" id="name" name="name" placeholder="name" />
                        <input type="password" id="password" name="pw" placeholder="Password" />

                        <Link to={"/home"}>
                            <SubmitButton>Sign In</SubmitButton>
                        </Link>

                        <Description>
                        This email and password lets you seamlessly log in to services and experiences across The Walt Disney Family of Companies, such as ESPN, Walt Disney World, Marvel, <a href="#">and more</a>.
                        </Description>
                    </SignInForm>
                </SignInContainer>
            </Content>
        </Container>
    );
};

const SignInContainer = styled.div`
    position: relative;
    background-color: white;
    height: clamp(50vh, 62vh, 65vh);
    border-radius: 0.9em;

    /* xs */
    @media (min-width: 475px) {
        width: 90vw;
    }

    /* sm */
    @media (min-width: 640px) {
        width: 70vw;
    }

    /* md */
    /* @media (min-width: 768px) {} */

    /* lg */
    @media (min-width: 1024px) {
        width: 50vw;
    }

    /* xl */
    @media (min-width: 1280px) {
        width: 32vw;
    }

    /* 2xl */
    /* @media (min-width: 1536px) {} */
`;

const SignInForm = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60vh;
    gap: 1em;

    h1 {
        color: var(--clr-midnight-blue);
        font-size: var(--size-3xl);
    }

    input {
        outline: none;
        border: none;
        background-color: var(--clr-light-gray);
        border-radius: 12px;
        padding-right: 14em;
        padding-left: 1.5em;
        padding-top: 1.5em;
        padding-bottom: 1.5em;
    }
`;

const Content = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
`;

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    background: var(--clr-background-gradient);
`;

const Logo = styled.div`
    padding: 0;
    width: auto;

    img {
        height: var(--size-8xl);
    }
`;

const SubmitButton = styled.button`
    border: none;
    outline: none;
    background-color: var(--clr-royal-blue);
    border-radius: 3em;
    color: white;
    padding: 1em 10.2em;
    font-size: var(--size-base);
    font-weight: 600;
    letter-spacing: 1.2px;
    cursor: pointer;
    transition: background-color 0.1s ease-in-out;

    &:hover {
        background-color: var(--clr-dodger-blue);
    }
`;

const Description = styled.p`
    color: black;
    font-size: var(--size-xs);
    padding: 0 8.5em;
    text-align: left;

    a {
        color: var(--clr-royal-blue);
    }
`;

export default SignIn;