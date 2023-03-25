import React from "react";
import styled from "styled-components";
import mockupImage from "../assets/illustration-mockups.svg";
import logo from "../assets/logo.svg";
import logoFacebook from "../assets/logo-facebook.svg";
import logoTwitter from "../assets/logo-twitter.svg";
import logoInstagram from "../assets/logo-instagram.svg";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    padding: 4rem 4rem 3rem 4rem;
    background-color: var(--violet);
    background-image: url("./src/assets/bg-desktop.svg");
    background-repeat: no-repeat;
    background-size: cover;

    > img {
        display: block;
        height: 42pt;
        width: 220px;
        margin-bottom: 5rem;
    }

    > div {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        flex-grow: 1;
        width: 100%;
        height: 100%;

        > img {
            height: 100%;
            width: 100%;
        }

        > div {
            display: flex;
            flex-direction: column;
            align-self: stretch;
            justify-content: space-between;
            width: 100%;
        }
    }

    @media (max-width: 1120px) {
        padding: 2rem;
        background-image: url("./src/assets/bg-mobile.svg");
        background-size: auto;

        > img {
            display: block;
            height: 26pt;
            width: 120px;
            margin-bottom: 3rem;
        }

        > div {
            flex-direction: column;
            > div {
                flex-grow: 1;
            }
        }
    }
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 4rem;
    height: 100%;

    h1 {
        font-family: "Poppins";
        color: #f1f1f1;
    }

    p {
        color: #d4d4d4;
        margin: 1rem 0 1.5rem 0;
    }

    button {
        font-family: "Poppins";
        font-weight: 400;
        font-size: 14px;
        color: var(--violet);
        background-color: #fdfdfd;
        border: none;
        border-radius: 25px;
        padding: 0.7rem 3rem;
        box-shadow: 0px 1px 8px 2px rgba(0, 0, 0, 0.4);
        
        :hover {
            background-color: var(--soft-magenta);
            color: #f1f1f1;
            cursor: pointer;
        }
    }

    @media (max-width: 1120px) {
        align-items: center;
        text-align: center;
        padding: 3.3rem 1.2rem;

        h1 {
            font-size: 22px;
        }

        p {
            font-size: 14px;
        }

        button {
            padding: 0.6rem 4rem;
        }
    }
`

const SocialsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-end;
    justify-content: space-between;
    width: 160px;

    > div {
        border: 1px solid #fff;
        border-radius: 100px;
        padding: 8px;

        > img {
            display: block;
            width: 26px;
            height: 26px;
            filter: invert(94%) sepia(100%) saturate(0%) hue-rotate(205deg) brightness(105%) contrast(100%);
        }

        :hover {
            border: 1px solid var(--soft-magenta);
            cursor: pointer;

            > img {
                filter: invert(76%) sepia(47%) saturate(3359%) hue-rotate(253deg) brightness(106%) contrast(82%);
            }
        }
    }

    @media (max-width: 1120px) {
        align-self: center;
        width: 115px;

        > div {
            padding: 5px;

            img {
                width: 18px;
                height: 18px;
            }
        }
    }
`

const LandingPage = () => {
    return (
        <MainContainer>
            <img src={logo} alt="logo" />
            <div>
                <img src={mockupImage} alt="mockups" />
                <div>
                    <ContentContainer>
                        <h1>Build The Community Your Fans Will Love</h1>
                        <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                        <button>Register</button>
                    </ContentContainer>
                    <SocialsContainer>
                        <div>
                            <img src={logoFacebook} alt="facebook" />
                        </div>
                        <div>
                            <img src={logoTwitter} alt="twitter" />
                        </div>
                        <div>
                            <img src={logoInstagram} alt="instagram" />
                        </div>
                    </SocialsContainer>
                </div>
            </div>
        </MainContainer>
    );
};

export default LandingPage;