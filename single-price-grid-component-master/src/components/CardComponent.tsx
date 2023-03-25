import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    display: grid;
    grid-template: auto auto / 350px 350px;
    border-radius: 10px;
    overflow: hidden;
    margin: 5rem 0;
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);

    h2 {
        font-size: 1.3rem;
        color: #fff;
    }

    @media (max-width: 750px) {
        grid-template: auto auto auto / 320px;
    }
`

const CommunityContainer = styled.div`
    grid-area: 1 / 1 / span 1 / span 2;
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    background-color: #fff;

    h1 { color: var(--cyan); }

    h3 {
        color: var(--bright-yellow);
        margin: 1.5rem 0 1rem 0;
    }

    p {
        color: var(--grayish-blue);
        line-height: 25px;
    }

    @media (max-width: 750px) {
        grid-area: 1 / 1 / span 1 / span 1;
        padding: 1.7rem;

        h1 {
            font-size: 1.5rem;
        }

        h3 {
            font-size: 1.1rem;
        }
    }
`

const SubscribtionContainer = styled.div`
    grid-area: 2 / 1 / span 1 / span 1;
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    background-color: var(--cyan);

    h3 {
        display: flex;
        font-size: 2rem;
        color: #fff;
        margin: 1rem 0 0.5rem 0;

        span {
            align-self: center;
            font-size: 1rem;
            font-weight: 400;
            color: #ffffff92;
            margin-left: 1rem;
        }
    }

    p { color: #fff; }

    button {
        background-color: var(--bright-yellow);
        font-family: "Karla";
        font-size: 17px;
        font-weight: 700;
        color: #fff;
        border: none;
        margin-top: 2rem;
        border-radius: 5px;
        height: 50px;
        box-shadow: 0px 3px 10px 2px rgba(0, 0, 0, 0.2);
        cursor: pointer;

        :hover { opacity: 90%;}
    }

    @media (max-width: 750px) {
        grid-area: 2 / 1 / span 1 / span 1;
        padding: 1.7rem;
    }
`

const InfoContainer = styled.div`
    grid-area: 2 / 2 / span 1 / span 1;
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    background-color: hsla(179, 62%, 43%, 0.7);

    h2 { margin-bottom: 1rem; }

    p {
        color: var(--light-gray);
        :not(:last-of-type) {
            margin-bottom: 3px;
        }
    }

    @media (max-width: 750px) {
        grid-area: 3 / 1 / span 1 / span 1;
        padding: 1.7rem;
    }
`

const CardComponent = () => {
    return (
        <CardContainer>
            <CommunityContainer>
                <h1>Join our community</h1>
                <h3>30-day, hassle-free money back guarantee</h3>
                <p>Gain access to our full library of tutorials along with 
                    expert code reviews. Perfect for any developers who are 
                    serious about honing their skills</p>
            </CommunityContainer>
            <SubscribtionContainer>
                <h2>Monthly Subscribtion</h2>
                <h3>$29 <span>per month</span></h3>
                <p>Full access for less than $1 a day</p>
                <button>Sign Up</button>
            </SubscribtionContainer>
            <InfoContainer>
                <h2>Why Us</h2>
                <p>Tutorials by industry experts</p>
                <p>Peer & expert code review</p>
                <p>Coding exercises</p>
                <p>Access to our GitHub repos</p>
                <p>Community forum</p>
                <p>Flashcard decks</p>
                <p>New videos every week</p>
            </InfoContainer>
        </CardContainer>
    );
};

export default CardComponent;