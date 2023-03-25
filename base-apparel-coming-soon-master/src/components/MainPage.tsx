import React, { useRef, useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import errorIcon from "../assets/icon-error.svg";
import arrowIcon from "../assets/icon-arrow.svg";
import heroDesktop from "../assets/hero-desktop.jpg";
import heroMobile from "../assets/hero-mobile.jpg";

interface FormProps {
    isError: boolean,
}

const MainContainer = styled.div`
    display: grid;
    grid-template: auto 1fr / 1fr auto;
    background-image: url("./src/assets/bg-pattern-desktop.svg"), var(--white-gradient);
    min-height: 100vh;

    @media (max-width: 950px) {
        grid-template: auto auto 1fr / auto;
    }
`

const LogoContainer = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    padding: 3.5rem 0 0 10rem;

    @media (max-width: 1300px) {
        padding: 3.5rem 0 0 6rem;
    }

    @media (max-width: 950px) {
        padding: 1.5rem 3rem;
    }
`

const ContentContainer = styled.div`
    grid-area: 2 / 1 / 3 / 2;
    margin: 9rem 14rem 0 10rem;

    h1 {
        font-size: 3.7rem;
        font-weight: 300;
        letter-spacing: 17px;
        line-height: 3.9rem;
        color: var(--desaturated-red);
        > span {
            font-weight: 600;
            color: var(--dark-grayish-red);
        }
    }

    > p {
        line-height: 24px;
        color: var(--desaturated-red);
        margin: 1rem 0 1.5rem 0;
    }

    @media (max-width: 1300px) {
        margin: 5rem 8rem 4rem 6rem;
    }

    @media (max-width: 950px) {
        grid-area: 3 / 1 / 4 / 2;
        margin: 4rem 2rem;

        h1 {
            text-align: center;
            font-size: 2.5rem;
            letter-spacing: 11px;
            line-height: 3rem;
        }
        > p {
            text-align: center;
        }
    }
`

const PictureContainer = styled.div`
    grid-area: 1 / 2 / span 2 / span 1;

    img {
        display: block;
        width: 100%;
        height: 100%;
    }

    @media (max-width: 1300px) {
        
    }

    @media (max-width: 950px) {
        grid-area: 2 / 1 / 3 / 2;
    }
`

const FormContainer = styled.form<FormProps>`
    display: flex;
    flex-direction: column;

    > p {
        font-size: 14px;
        margin: 0.6rem 1.4rem;
        color: var(--soft-red);
    }

    > div {
        display: flex;
        flex-direction: row;
        border-radius: 30px;
    
        > div {
            display: flex;
            flex-direction: row;
            flex-grow: 1;
            border: ${props => props.isError ? "2px solid var(--soft-red)" : "1px solid var(--desaturated-red)"};
            border-radius: 30px;
            padding-right: ${props => props.isError ? "none" : "4rem"};

            img {
                display: block;
                align-self: center;
                height: 24px;
                width: 24px;
                margin-right: 4.5rem;
            }
        }
    }

    input {
        font-family: "Josefin Sans";
        font-size: 16px;
        background: none;
        border-radius: inherit;
        border: none;
        outline: none;
        padding: 1rem 1rem 1rem 1.5rem;
        flex-grow: 1;

        ::placeholder {
            color: var(--desaturated-red);
        }
    }

    button {
        padding: 0.7rem 2.4rem;
        margin-left: -4rem;
        border: none;
        border-radius: inherit;
        background: linear-gradient(135deg, hsl(0, 80%, 86%) 0%, hsl(0, 74%, 74%) 100%);
        cursor: pointer;

        :hover {
            background: linear-gradient(135deg, hsl(0, 80%, 86%) 0%, hsl(0, 52%, 80%) 100%);
            box-shadow: 0px 4px 15px 0px rgb(117, 49, 49);
        }
    }

    @media (max-width: 950px) {
        button {
            padding: 0.7rem 2rem;
        }
    }
`

const MainPage = () => {
    const [isError, setIsError] = useState(false);
    const ref = useRef<HTMLInputElement | null>(null);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (ref !== null) {
            if (ref?.current?.value === "" || !ref?.current?.validity.valid) {
                setIsError(true);
            } else {
                setIsError(false);
            }
        }
    }

    return (
        <MainContainer>
            <LogoContainer>
                <img src={logo} alt="logo" />
            </LogoContainer>
            <ContentContainer>
                <h1>WE&apos;RE <span>COMING SOON</span></h1>
                <p>Hello fellow shoppers! We&apos;re currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
                <FormContainer isError={isError} tabIndex={0} noValidate onSubmit={onSubmit}>
                    <div>
                        <div>
                            <input ref={ref} placeholder="Email Address" type="email" />
                            {isError && <img src={errorIcon} alt="error" />}
                        </div>
                        <button>
                            <img src={arrowIcon} alt="button" />
                        </button>
                    </div>
                    {isError && <p>Please provide a valid email</p>}
                </FormContainer>
            </ContentContainer>
            <PictureContainer>
                <picture>
                    <source srcSet={heroMobile} media="(max-width: 950px)" />
                    <img src={heroDesktop} alt="hero" />
                </picture>
            </PictureContainer>
        </MainContainer>
    );
};

export default MainPage;