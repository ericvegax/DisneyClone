import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = (props) => {
    return (
    <Nav>
        <Logo>
            <img src="/assets/images/logo.svg" alt="Disney+" draggable="false" />
        </Logo>
        <Link to={"/login"}>
            <NavLoginBtn>log in</NavLoginBtn>
        </Link>
    </Nav>
    );
};

const Nav = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: var(--clr-midnight-blue-2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 36px;
    z-index: 1;
`;

const Logo = styled.a`
    padding: 0;
    width: auto;
    cursor: pointer;

    img {
        height: var(--size-5xl);
    }
`;

const NavLoginBtn = styled.a`
    text-transform: uppercase;
    font-size: var(--size-sm);
    font-weight: 600;
    letter-spacing: 1.7px;
    background-color: black;
    padding: 1em 1.5em;
    border: 0.8px solid white;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: white;
        color: var(--clr-midnight-blue);
    }
`;


export default Header;