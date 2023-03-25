import React, { useRef, useState } from "react";
import logo from "../assets/logo.svg";
import logoInstagram from "../assets/logo-instagram.svg";
import logoTwitter from "../assets/logo-twitter.svg";
import logoFacebook from "../assets/logo-facebook.svg";
import dashboardImage from "../assets/illustration-dashboard.png";
import styled from "styled-components";

interface FormProps {
    isError: boolean,
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    max-width: 900px;
    padding: 4rem 1rem 2rem 1rem;

    > div:first-child {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }

    h1 {
        font-weight: 300;
        color: var(--gray);
        margin: 2rem 0 0.7rem 0;
        span {
            font-weight: 700;
            color: var(--very-dark-blue);
        }
    }

    > p {
        color: var(--very-dark-blue);
        :last-child {
            font-size: 17px;
            color: var(--gray);
        }
    }

    > img {
        width: 100%;
        height: 100%;
        margin-bottom: 1rem;
    }

    @media (max-width: 600px) {
        padding: 4rem 2rem 2rem 2rem;

        h1 {
            font-size: 27px;
        }

        > p {
            font-size: 16px;

            :last-child {
                font-size: 15px;
            }
        }

        > div:first-child {
            img {
                display: block;
                width: 80%;
                height: 80%;
            }
        }
    }
`

const InputForm = styled.form<FormProps>`
    display: flex;
    flex-direction: row;
    margin: 2rem 0 4rem 0;

    div {
        h6 {
            margin: 5px 0 0 0.8rem;
            font-weight: 300;
            font-size: 12px;
            font-style: italic;
            color: var(--light-red);
        }
    }

    input {
        font-family: "Libre Franklin";
        padding: 0 25px;
        width: 350px;
        height: 43px;
        margin-right: 0.8rem;
        border-radius: 25px;
        border: 1px solid ${props => props.isError ? "var(--light-red)" : "var(--pale-blue)"};
        
        ::placeholder {
            color: var(--pale-blue);
        }

        :focus {
            outline: none;
            border: 1px solid ${props => props.isError ? "var(--light-red)" : "var(--blue)"};
        }
    }

    button {
        background-color: var(--blue);
        color: #fff;
        font-family: "Libre Franklin";
        font-weight: 600;
        width: 150px;
        height: 43px;
        border: none;
        border-radius: 25px;
        box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
        
        :hover {
            opacity: 80%;
            cursor: pointer;
        }
    }

    @media (max-width: 600px) {
        flex-direction: column;

        input, button {
            margin-right: 0;
            width: 300px;
            
            :not(input) {
                margin-top: 8px;
            }
        }

        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            h6 {
                margin-left: 0;
                margin-bottom: 18px;
            }
        }
    }
`

const NetworkContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: auto 0 1rem 0;
    width: 160px;

    > div {
        border: 1px solid var(--pale-blue);
        border-radius: 100px;
        padding: 8px;

        img {
            display: block;
            width: 20px;
            height: 20px;
            filter: invert(41%) sepia(84%) saturate(1704%) hue-rotate(207deg) brightness(98%) contrast(94%);
        }

        :hover {
            border: 1px solid var(--blue);
            background-color: var(--blue);
            cursor: pointer;
            img {
                filter: invert(100%) sepia(0%) saturate(7480%) hue-rotate(36deg) brightness(106%) contrast(104%);
            }
        }
    }

    @media (max-width: 600px) {

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
        <PageContainer>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <h1>We are launching <span>soon!</span></h1>
            <p>Subscribe and get notified</p>
            <InputForm isError={isError} onSubmit={onSubmit} noValidate>
                <div>
                    <input ref={ref} type="email" placeholder="Your email address..." />
                    {isError && <h6>Please provide a valid email address</h6>}
                </div>
                <button type="submit">Notify Me</button>
            </InputForm>
            <img src={dashboardImage} alt="dashboard" />
            <NetworkContainer>
                <div>
                    <img src={logoFacebook} alt="facebook" />
                </div>
                <div>
                    <img src={logoTwitter} alt="twitter" />
                </div>
                <div>
                    <img src={logoInstagram} alt="instagram" />
                </div>
            </NetworkContainer>
            <p>© Copyright Ping. All rights reserved.</p>
        </PageContainer>
    );
};

export default MainPage;