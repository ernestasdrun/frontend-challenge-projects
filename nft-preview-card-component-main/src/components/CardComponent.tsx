import React from "react";
import styled from "styled-components";
import nftImage from "../assets/image-equilibrium.jpg"
import authorAvatar from "../assets/image-avatar.png"
import ethIcon from "../assets/icon-ethereum.svg"
import clockIcon from "../assets/icon-clock.svg"
import viewIcon from "../assets/icon-view.svg"

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--very-dark-blue-main);
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 310px;
    border-radius: 15px;
    background-color: var(--very-dark-blue-card);
    box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.2);
`

const ImageContainer = styled.div`
    margin: 1.5rem;
    border-radius: 15px;
    position: relative;
    img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 15px;

        :hover {
            filter: opacity(50%);
            cursor: pointer;
        }

        :last-child {
            display: none;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: auto;
            height: auto;
            pointer-events: none;
        }
    }

    :hover {
        background-color: var(--cyan-color);

        img:last-child {
            display: block;
        }
    }
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 1.5rem;

    h2 {
        color: var(--white-color);

        :hover {
            color: var(--cyan-color);
            cursor: pointer;
        }
    }

    p {
        color: var(--soft-blue-color);
        font-weight: 300;
        font-size: 16px;
        margin: 1rem 0;
        line-height: 25px;
    }
`

const DataContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: 2px 0 0.8rem 0;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        h4 {
            font-weight: 400;
            margin-left: 8px;
        }

        :first-child {
            color: var(--cyan-color);
        }

        :last-child {
            color: var(--soft-blue-color);
        }
    }
`

const AuthorContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    margin: 0.2rem 0;
    border-top: 1px solid var(--very-dark-blue-color);

    img {
        height: 35px;
        width: 35px;
        border: 1px solid var(--white-color);
        border-radius: 100px;
        margin-right: 1rem;
    }

    h4 {
        font-weight: 300;
        color: var(--soft-blue-color);

        span {
            color: var(--white-color);

            :hover {
                color: var(--cyan-color);
                cursor: pointer;
            }
        }
    }
`

const CardComponent = () => {
    return (
        <MainContainer>
            <CardContainer>
                <ImageContainer>
                    <img src={nftImage} alt="nft" />
                    <img className="view" src={viewIcon} alt="view" />
                </ImageContainer>
                <ContentContainer>
                    <h2>Equilibrium #3429</h2>
                    <p>Our Equilibrium collection promotes balance and calm.</p>
                    <DataContainer>
                        <div>
                            <img src={ethIcon} alt="ethereum" />
                            <h4>0.041 ETH</h4>
                        </div>
                        <div>
                            <img src={clockIcon} alt="ethereum" />
                            <h4>3 days left</h4>
                        </div>
                    </DataContainer>
                    <AuthorContainer>
                        <img src={authorAvatar} alt="author" />
                        <h4>Creation of <span>Jules Wyvern</span></h4>
                    </AuthorContainer>
                </ContentContainer>
            </CardContainer>
        </MainContainer>
    );
};

export default CardComponent;