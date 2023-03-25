import React from "react";
import styled from "styled-components";
import CardComponent from "./CardComponent";
import karmaIcon from "../assets/icon-karma.svg";
import calculatorIcon from "../assets/icon-calculator.svg";
import supervisorIcon from "../assets/icon-supervisor.svg";
import teamIcon from "../assets/icon-team-builder.svg";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding: 4rem 2rem 3rem 2rem;
    background-color: var(--very-light-gray);

    h1 {
        font-size: 1.8rem;
        font-weight: 200;
        color: var(--very-dark-blue);
    }

    h2 {
        font-size: 1.8rem;
        font-weight: 600;
        color: var(--very-dark-blue);
    }

    > p {
        text-align: center;
        color: var(--grayish-blue);
        margin: 1rem 0 3rem 0;
        width: 520px;
    }

    @media (max-width: 1150px) {
        h1, h2 {
            font-size: 1.6rem;
        }

        > P {
            width: clamp(300px, 50vw, 520px);
        }
    }
`

const CardList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    > div {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 1150px) {
        flex-direction: column;
    }
`

const MainPage = () => {
    return (
        <MainContainer>
            <h1>Reliable, efficient delivery</h1>
            <h2>Powered by Technology</h2>
            <p>Our artificial intelligence powered tools use millions of project data points to ensure that your project is successful</p>
            <CardList>
                <CardComponent color="--cyan" icon={supervisorIcon} altText="supervisor">
                    <h3>Supervisor</h3>
                    <p>Monitors activity to identify project roadblocks</p>
                </CardComponent>
                <div>
                    <CardComponent color="--red" icon={teamIcon} altText="team">
                        <h3>Team Builder</h3>
                        <p>Scans our talent network to create the optimal team for your project</p>
                    </CardComponent>
                    <CardComponent color="--orange" icon={karmaIcon} altText="karma">
                        <h3>Karma</h3>
                        <p>Regularly evaluates our talent to ensure quality</p>
                    </CardComponent>
                </div>
                <CardComponent color="--blue" icon={calculatorIcon} altText="calculator">
                    <h3>Calculator</h3>
                    <p>Uses data from past projects to provide beter delivery estimates</p>
                </CardComponent>
            </CardList>
        </MainContainer>
    );
};

export default MainPage;