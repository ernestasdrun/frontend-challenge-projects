import React from "react";
import styled from "styled-components";
import heroIcon from "../assets/illustration-hero.svg";
import musicIcon from "../assets/icon-music.svg";

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: url("../src/assets/pattern-background-desktop.svg"), var(--pale-blue-color);
    background-repeat: repeat-x;

    @media (max-width: 600px) {
        background: url("../src/assets/pattern-background-mobile.svg"), var(--pale-blue-color);
        background-repeat: no-repeat;
    }
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    border-radius: 20px;
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.2);

    @media (max-width: 470px) {
        max-width: 330px;
    }
`

const ImageContainer = styled.div`
    border-radius: 20px 20px 0 0;

    img {
        display: block;
        height: 100%;
        width: 100%;
        border-radius: inherit;
    }
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 3rem 1.3rem 3rem;
    background-color: #fff;
    text-align: center;
    border-radius: 0 0 20px 20px;

    h2 {
        font-weight: 900;
        font-size: 1.4rem;
        color: var(--dark-blue-color);
        margin-bottom: 0.8rem;
    }

    h5 {
        font-weight: 500;
        font-size: 0.8rem;
        color: var(--desaturated-blue-color);
        padding: 0 2rem;
        margin-bottom: 1rem;
        line-height: 18px;
        :last-child {
            font-size: 0.85rem;
            margin-top: 1.5rem;
            font-weight: 900;
            :hover {
                color: var(--dark-blue-color);
                cursor: pointer;
            }
        }
    }
    button {
        border: none;
        width: 100%;
        height: 40px;
        border-radius: 10px;
        background-color: var(--bright-blue-color);
        font-weight: 700;
        color: var(--very-pale-blue-color);
        box-shadow: 0px 10px 30px 1px hsla(245, 75%, 52%, 0.3);
        :hover {
            filter: opacity(70%);
            cursor: pointer;
        }
    }

    @media (max-width: 470px) {
        padding: 2rem 1.5rem 1.3rem 1.5rem;
    }
`

const PlanContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: var(--very-pale-blue-color);
    width: 100%;
    padding: 18px;
    margin-bottom: 1.7rem;
    border-radius: 10px;

    img {
        width: 43px;
        height: 43px;
    }

    div:nth-child(1) {
        display: flex;
        flex-direction: row;
        div {
            display: flex;
            flex-direction: column;
            margin-left: 15px;
    
            p {
                :first-child {
                    color: var(--dark-blue-color);
                    font-weight: 700;
                    margin-bottom: 3px;
                }
    
                :last-child {
                    color: var(--desaturated-blue-color);
                }
            }
        }
    }
    div:nth-child(2) {
        p:only-child {
            font-size: 0.9rem;
            font-weight: 900;
            color: var(--bright-blue-color);
            text-decoration-line: underline;
    
            :hover {
                opacity: 70%;
                text-decoration: none;
                cursor: pointer;
            }
        }
    }
`

const OrderSummary = () => {
    return (
        <MainContainer>
            <CardContainer>
                <ImageContainer>
                    <img src={heroIcon} alt="hero" />
                </ImageContainer>
                <ContentContainer>
                    <h2>Order Summary</h2>
                    <h5>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</h5>
                    <PlanContainer>
                        <div>
                            <img src={musicIcon} alt="music" />
                            <div>
                                <p>Annual Plan</p>
                                <p>$59.99/year</p>
                            </div>
                        </div>
                        <div>
                            <p>Change</p>
                        </div>
                    </PlanContainer>
                    <button>Proceed to Payment</button>
                    <h5>Cancel Order</h5>
                </ContentContainer>
            </CardContainer>
        </MainContainer>
    );
};

export default OrderSummary;