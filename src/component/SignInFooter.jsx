import React from 'react';
import styled from 'styled-components';

const SignInFooter = (props) => {
    return (
        <Container>
            <FooterList>
                <FooterItem><a href='#'>Privacy Policy</a></FooterItem>
                <FooterItem><a href='#'>Subscriber Agreement</a></FooterItem>
                <FooterItem><a href='#'>Your US State Privacy Rights</a></FooterItem>
                <FooterItem><a href='#'>Children's Online Privacy Policy</a></FooterItem>
                <FooterItem><a href='#'>Help</a></FooterItem>
                <FooterItem><a href='#'>Closed Captioning</a></FooterItem>
                <FooterItem><a href='#'>Supported Devices</a></FooterItem>
                <FooterItem><a href='#'>Gift Disney+</a></FooterItem>
                <FooterItem><a href='#'>About Us</a></FooterItem>
                <FooterItem><a href='#'>Disney+ Partner Program</a></FooterItem>
                <FooterItem><a href='#'>Interest-based Ads</a></FooterItem>
                <FooterItem id='copyright'><a href='#'>&copy; Disney. All Rights Reserved.</a></FooterItem>
            </FooterList>
        </Container>
    );
};

const Container = styled.div`
    height: 15vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    /* xs */
    @media (min-width: 475px) {
        width: 96.5vw;
    }

    /* sm */
    @media (min-width: 640px) {
        
    }

    /* md */
    /* @media (min-width: 768px) {} */

    /* lg */
    @media (min-width: 1024px) {

    }

    /* xl */
    @media (min-width: 1280px) {
        width: 99.1vw;
    }

    /* 2xl */
    /* @media (min-width: 1536px) {} */
`;

const FooterList = styled.ul`
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: repeat(2, 1fr);
    list-style: none;
    justify-content: center;
    align-items: center;

    #copyright {
        margin-top: 1em;
        grid-row: 2;
        grid-column: span 11;
        justify-self: center;
        text-align: center;
    }
`;

const FooterItem = styled.li`
    font-size: var(--size-xs);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    a {
        color: var(--clr-gunmetal);
    }
`;

export default SignInFooter;