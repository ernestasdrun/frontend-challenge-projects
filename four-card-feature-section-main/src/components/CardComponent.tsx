import React, { ReactNode } from "react";
import styled from "styled-components";

interface CardComponentProps {
    color: string,
    icon: string,
    altText: string,
    children: ReactNode,
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    margin: 1rem;
    height: 240px;
    width: 350px;
    border-radius: 5px;
    border-top: 3px solid ${props => `var(${props.color})`};
    background-color: #fff;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);

    h3 {
        font-size: 1.3rem;
        color: var(--very-dark-blue);
        margin-bottom: 0.7rem;
    }

    p {
        font-size: 0.9rem;
        color: var(--grayish-blue);
    }

    img {
        display: block;
        margin-top: auto;
        align-self: flex-end;
    }

    @media (max-width: 1150px) {
        height: 220px;
        width: 310px;
    }
`

const CardComponent = ({ color, icon, altText, children }: CardComponentProps) => {
    return (
        <CardContainer color={color}>
            {children}
            <img src={icon} alt={altText} />
        </CardContainer>
    );
};

export default CardComponent;