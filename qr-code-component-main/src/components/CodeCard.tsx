import React from "react";
import styled from "styled-components";
import qrCode from "../assets/image-qr-code.png";

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 500px;
    width: 320px;
    border-radius: 20px;
    background-color: var(--white-color);
    box-shadow: 0px 2px 5px 2px rgba(0,0,0,0.1);
`

const ImageContainer = styled.div`
    margin: 17px;
    border-radius: 10px;
    img {
        width: 100%;
        height: 100%;
        border-radius: inherit;
    }
`

const TextContainer = styled.div`
    margin: 8px 29px;
    text-align: center;
    h2 {
        font-size: 22px;
        color: var(--dark-blue-color);
        margin-bottom: 15px;
    }
    p {
        color: var(--grayish-blue-color);
    }
`

const CodeCard = () => {
    return (
        <MainContainer>
            <CardContainer>
                <ImageContainer>
                    <img src={qrCode} alt="code" />
                </ImageContainer>
                <TextContainer>
                    <h2>Improve your front-end skills by building projects</h2>
                    <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                </TextContainer>
            </CardContainer>
        </MainContainer>
    );
};

export default CodeCard;