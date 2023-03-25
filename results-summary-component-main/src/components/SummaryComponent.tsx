import React from "react";
import styled from "styled-components";
import data from "../../data.json";

const SummaryComponent = () => {

    return (
        <MainContainer>
            <SummaryContainer>
                <ResultContainer>
                    <h3>Your Result</h3>
                    <ScoreContainer>
                        <h1>76</h1>
                        <h4>of 100</h4>
                    </ScoreContainer>
                    <h2>Great</h2>
                    <p>You scored higher than 65% of the people who have taken these tests</p>
                </ResultContainer>
                <DetailsContainer>
                    <h3>Summary</h3>
                    {data.map((data, index) => {
                        return (
                            <DataContainer key={index}>
                                <div>
                                    <img src={data.icon} alt={data.category} />
                                    <p>{data.category}</p>
                                </div>
                                <div>
                                    <p>{data.score} <span>/ 100</span></p>
                                </div>
                            </DataContainer>
                        )
                    })}
                    <Button>
                        <p>Continue</p>
                    </Button>
                </DetailsContainer>
            </SummaryContainer>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    @media (min-width: 600px){
        height: 100vh;
    }
    @media (max-height: 700px) and (max-width: 599px){
        height: auto;
    }
`

const SummaryContainer = styled.div`
    display: flex;
    background-color: var(--white-color);
    flex-direction: column;
    align-items: stretch;
    height: 100%;
    width: 100%;

    @media (min-width: 600px){
        flex-direction: row;
        height: 420px;
        width: 600px;
        border-radius: 25px;
    }
`

const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1.5rem 2rem 3rem 2rem;
    background: linear-gradient(180deg, var(--light-slate-blue-color) 0%, var(--light-royal-blue-color) 100%);
    border-radius: 0 0 40px 40px;

    p {
        color: var(--light-lavander-color);

    }
    h2 {
        color: var(--pale-blue-color);
        margin-bottom: 10px;
    }
    h3 {
        color: var(--light-lavander-color);
        margin-bottom: 10px;
    }

    @media (min-width: 600px){
        width: 50%;
        border-radius: 25px;
    }
`

const ScoreContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 130px;
    height: 130px;
    border-radius: 100px;
    margin: 1rem 0;

    background: linear-gradient(170deg, var(--violet-blue-color) 0%, var(--persian-blue-color) 100%);

    h1 {
        color: var(--pale-blue-color);
        margin-bottom: 0px;
        font-size: 3rem;
    }
    h4 {
        color: hsla(221, 100%, 96%, 40%);
    }

    @media (min-width: 600px){
        width: 155px;
        height: 155px;
    }
`

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;

    h3 {
        color: var(--dark-gray-blue-color);
        margin: 4px 0;

        @media (min-width: 600px){
        font-size: 1.3rem;
        font-weight: 800;
        }
    }

    div:nth-child(2){
        color: var(--light-red-color);
        background-color: hsla(0, 100%, 67%, 5%);
    }

    div:nth-child(3){
        color: var(--orange-yellow-color);
        background-color: hsla(39, 100%, 56%, 5%);
    }

    div:nth-child(4){
        color: var(--green-teal-color);
        background-color: hsla(166, 100%, 37%, 5%);
    }

    div:nth-child(5){
        color: var(--cobalt-blue-color);
        background-color: hsla(234, 85%, 45%, 5%);
    }

    @media (min-width: 600px){
        width: 50%;
    }
`

const DataContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin: 7px 0;
    padding: 0 15px;

    height: 45px;
    border-radius: 5px;

    p {
        font-weight: 600;
    }

    div {
        display: flex;
        img {
            margin-right: 10px;
        }
        :last-child {
            color: var(--dark-gray-blue-color);
            span {
                color: hsla(224, 30%, 27%, 60%);
            }
        }
    }
`

const Button = styled.div`
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    width: 90%;
    height: 50px;
    margin-top: 10px;
    background-color: var(--dark-gray-blue-color);
    color: var(--white-color);
    p {
        font-size: 18px;
        font-weight: 700;
    }

    :hover {
        background: linear-gradient(180deg, var(--light-slate-blue-color) 0%, var(--light-royal-blue-color) 100%);
        cursor: pointer;
    }
`

export default SummaryComponent;