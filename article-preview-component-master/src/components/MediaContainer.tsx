import React from "react";
import styled from "styled-components";
import facebookIcon from "../assets/icon-facebook.svg";
import pinterestIcon from "../assets/icon-pinterest.svg";
import twitterIcon from "../assets/icon-twitter.svg";

const MediaBox = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1.3rem 2.5rem;

    p {
        letter-spacing: 3px;
        font-size: 12px;
        color: var(--grayish-blue);
    }

    img {
        display: block;
        width: 100%;
        height: 100%;
        margin-left: 18px;
        cursor: pointer;
    }

    @media (max-width: 870px) {
        padding: 0;

        p {
            letter-spacing: 5px;
        }
    }
`

const MediaContainer = () => {
    return (
        <MediaBox>
            <p draggable>SHARE</p>
            <img src={facebookIcon} alt="facebook" />
            <img src={twitterIcon} alt="twitter" />
            <img src={pinterestIcon} alt="pinterest" />
        </MediaBox>
    );
};

export default MediaContainer;