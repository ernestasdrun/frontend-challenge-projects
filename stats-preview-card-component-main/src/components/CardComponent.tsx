import React from "react";
import styled from "styled-components";
import headerDesktop from "../assets/image-header-desktop.jpg";
import headerMobile from "../assets/image-header-mobile.jpg";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1.2rem;
    border-radius: 10px;
    overflow: hidden;
    background-color: var(--soft-violet);

    img {
        display: block;
        width: 100%;
        height: 100%;
        filter: contrast(100%) opacity(80%) brightness(40%);
        mix-blend-mode: hard-light;
    }

    @media (min-width: 950px) {
        flex-direction: row-reverse;
        max-width: 1000px;

        img {
            width: 500px;
        }
    }
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 3rem 2.3rem;
    text-align: center;
    font-family: "Inter";
    background-color: var(--dark-desaturated-blue);

    h1 {
        font-size: 29px;
        line-height: 30px;
        color: var(--white);
        margin-bottom: 1.3rem;

        span {
            color: var(--soft-violet);
        }
    }

    > p {
        line-height: 22px;
        margin-bottom: 2.5rem;
        color: var(--slightly-transparent-white-p);
    }

    > div {
        display: flex;
        flex-direction: column;
        width: 90%;

        div {
            display: flex;
            flex-direction: column;

            :not(:last-child) {
                margin-bottom: 2rem;
            }
        }

        h2 {
            color: var(--white);
            margin-bottom: 7px;
        }

        p {
            font-family: "Lexend Deca";
            font-size: 13px;
            font-weight: 300;
            color: var(--slightly-transparent-white-h);
        }
    }

    @media (min-width: 950px) {
        align-items: flex-start;
        text-align: left;
        height: auto;
        padding: 5rem;

        > div {
            margin: 5rem 0 0 0;
            flex-direction: row;
            justify-content: space-between;

            div:not(:last-child) {
                margin-bottom: 0rem;
            }
        }

        > p {
            font-size: 14px;
        }
    }
`

const CardComponent = () => {
    return (
        <CardContainer>
            <picture>
                <source srcSet={headerMobile} media="(max-width: 950px)" />
                <img src={headerDesktop} alt="header" />
            </picture>
            <ContentContainer>
                <h1>Get <span>insights</span> that help your business grow.</h1>
                <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
                <div>
                    <div>
                        <h2>10k+</h2>
                        <p>COMPANIES</p>
                    </div>
                    <div>
                        <h2>314</h2>
                        <p>TEMPLATES</p>
                    </div>
                    <div>
                        <h2>12M+</h2>
                        <p>QUERIES</p>
                    </div>
                </div>
            </ContentContainer>
        </CardContainer>
    );
};

export default CardComponent;