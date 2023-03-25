import React from "react";
import styled from "styled-components";
import bannerImage from "../assets/bg-pattern-card.svg";
import userImage from "../assets/image-victor.jpg";
//url("../src//assets/bg-pattern-bottom.svg")
const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: -100px;
    background-color: #2396a5;
    position: relative;
`

const TopPatternContainer = styled.div`
    background-image: url("../src/assets/bg-pattern-top.svg");
    background-repeat: no-repeat;
    background-position: left top;
    border: 1px solid red;
    position: fixed;
    margin: -800px 0 0 -500px;
    width: 350%;
    height: 150%;

    @media (min-width: 480px) {
        width: 250%;
        height: 140%;
    }

    @media (min-width: 700px) {
        width: 150%;
        height: 100%;
    }

    @media (min-width: 1000px) {
        width: 140%;
        height: 170%;
    }

    @media (min-width: 1800px) {
        width: 100%;
        height: 100%;
    }
`

const BottomPatternContainer = styled.div`
    background-image: url("../src/assets/bg-pattern-bottom.svg");
    background-repeat: no-repeat;
    background-position: right bottom;
    border: 1px solid red;
    position: fixed;
    margin: 800px 0 0 500px;
    width: 350%;
    height: 150%;

    @media (min-width: 480px) {
        width: 250%;
        height: 140%;
    }

    @media (min-width: 700px) {
        width: 150%;
        height: 100%;
    }

    @media (min-width: 1000px) {
        width: 140%;
        height: 170%;
    }

    @media (min-width: 1800px) {
        width: 100%;
        height: 100%;
    }
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    border-radius: 20px;
`

const BannerContainer = styled.div`
    border-radius: 20px 20px 0 0;
    background-color: var(--white-color);
    img {
        border-radius: inherit;
    }
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    border-radius: 0 0 20px 20px;
    background-color: var(--white-color);
`

const UserInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    p {
        color: var(--grayish-blue-color);
        margin-top: 8px;
        margin-bottom: 1.5rem;
    }

    span {
        color: var(--grayish-blue-color);
        font-weight: 500;
        margin-left: 10px;
    }

    img {
        margin-top: -3.5rem;
        margin-bottom: 1rem;
        border-radius: 100px;
        border: 5px solid var(--white-color);
    }
`

const StatisticsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    padding: 1.5rem 0;
    border-top: 1px solid var(--light-gray-color);
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    h6 {
        color: var(--grayish-blue-color);
        font-weight: 500;
        letter-spacing: 2px;
        padding-top: 4px;
    }
`

const ProfileCard = () => {
    return (
        <MainContainer>
            <CardContainer>
                <BannerContainer>
                    <img src={bannerImage} alt="banner" />
                </BannerContainer>
                <ContentContainer>
                    <UserInfoContainer>
                        <img src={userImage} alt="picture" />
                        <h3>Victor Crest<span>26</span></h3>
                        <p>London</p>
                    </UserInfoContainer>
                    <StatisticsContainer>
                        <div>
                            <h3>80K</h3>
                            <h6>Followers</h6>
                        </div>
                        <div>
                            <h3>803K</h3>
                            <h6>Likes</h6>
                        </div>
                        <div>
                            <h3>1.4K</h3>
                            <h6>Photos</h6>
                        </div>
                    </StatisticsContainer>
                </ContentContainer>
            </CardContainer>
            <TopPatternContainer />
            <BottomPatternContainer />
        </MainContainer>
    );
};

export default ProfileCard;