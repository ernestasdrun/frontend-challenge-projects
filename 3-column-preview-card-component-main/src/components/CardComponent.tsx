import React from "react";
import styled from "styled-components";
import sedanImage from "../assets/icon-sedans.svg";
import suvImage from "../assets/icon-suvs.svg";
import luxuryImage from "../assets/icon-luxury.svg";

interface InnerCardContainerProps {
    $color: string,
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    margin: 1rem 2rem;
    max-width: 400px;
    overflow: hidden;

    @media (min-width: 755px) {
        flex-direction: row;
        max-width: 870px;
        height: 450px;
    }
`

const InnerCardContainer = styled.div<InnerCardContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 3rem;
    background-color: ${props => `var(${props.$color})`};

    h1 {
        font-family: "Big Shoulders Display";
        font-size: 2.5rem;
        color: var(--very-light-gray);
        margin: 2rem 0;
    }
    p {
        color: var(--transparent-white);
        font-weight: 300;
        line-height: 20px;
        margin-bottom: 2rem;
    }
    button {
        background-color: var(--very-light-gray);
        color: ${props => `var(${props.$color})`};
        font-weight: 600;
        border-radius: 25px;
        border: 2px solid var(--very-light-gray);
        padding: 0.9rem 2rem;
        margin-top: auto;
        :hover {
            background-color: ${props => `var(${props.$color})`};
            color: var(--very-light-gray);
            cursor: pointer;
        }
    }
`

const CardComponent = () => {
    return (
        <CardContainer>
            <InnerCardContainer $color="--bright-orange">
                <img src={sedanImage} alt="sedan" />
                <h1>SEDANS</h1>
                <p>Choose a sedan for its affordability and excelent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
                <button>Learn More</button>
            </InnerCardContainer>
            <InnerCardContainer $color="--dark-cyan">
                <img src={suvImage} alt="suv" />
                <h1>SUVS</h1>
                <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
                <button>Learn More</button>
            </InnerCardContainer>
            <InnerCardContainer $color="--very-dark-cyan">
                <img src={luxuryImage} alt="luxury" />
                <h1>LUXURY</h1>
                <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>
                <button>Learn More</button>
            </InnerCardContainer>
        </CardContainer>
    );
};

export default CardComponent;