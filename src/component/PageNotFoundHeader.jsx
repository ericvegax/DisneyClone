import React from "react";
import styled from "styled-components";

const NotFoundHeader = (props) => {
    return (
        <Nav>
            <Logo>
                <img src="/assets/images/logo.svg" alt="Disney+" draggable="false" />
            </Logo>
        </Nav>
    );
};

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: var(--clr-black-20opacity);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 36px;
    z-index: 1;
`;

const Logo = styled.div`
    padding: 0;
    width: auto;

    img {
        height: var(--size-5xl);
    }
`;

export default NotFoundHeader;