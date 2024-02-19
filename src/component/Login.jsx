import React from "react";
import styled from "styled-components";

const Login = (props) => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/assets/images/cta-logo-one.svg" alt="" draggable="false" />
                    <SignUp>GET ALL THREE</SignUp>
                    <Description>
                        U.S. residents, 18+ only. Offer valid for eligible subscribers only. Select Hulu content available via Disney+ with valid Hulu and Disney+ subscriptions; additional content only available via Hulu app.<br /> © {new Date().getFullYear()} Disney and its related entities. <DescriptionTerms>Additional terms apply.</DescriptionTerms>
                    </Description>
                    <CTALogoTwo src="/assets/images/cta-logo-two.png" alt="" draggable="false" />
                </CTA>
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
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/assets/images/login-background.jpg");
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
`;

const CTA = styled.div`
    width: 100%;
    max-width: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
    
`;

const SignUp = styled.a`
    font-weight: bold;
    background-color: var(--clr-royal-blue);
    cursor: pointer;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: var(--clr-dodger-blue);
    }
`;

const Description = styled.p`
    color: var(--clr-light-gray);
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
    text-align: center;
`;

const CTALogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`;

const DescriptionTerms = styled.a`
    color: white;
    font-weight: 400;
    cursor: pointer;
    text-decoration: underline;
`;

export default Login;

