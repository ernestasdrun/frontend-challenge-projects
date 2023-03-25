import React, { useState } from "react";
import styled from "styled-components";
import starIcon from "../assets/icon-star.svg";
import completedIcon from "../assets/illustration-thank-you.svg";
import RatingButton, { StyledButtonContainer } from "./RatingButton";

interface CardContainerProps {
    isSubmitted: boolean,
}

const CardContainer = styled.div<CardContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.isSubmitted ? "center" : "none"};
    text-align: ${props => props.isSubmitted ? "center" : "none"};
    border-radius: 20px;
    width: 390px;
    height: 390px;
    padding: ${props => props.isSubmitted ? "3rem 1.5rem" : "2rem"};
    background: linear-gradient(180deg, hsla(213, 19%, 18%, 0.8) 0%, hsla(213, 19%, 18%, 0.5) 50%, hsla(213, 19%, 18%, 0.2) 100%);

    .rating-overview {
        background-color: var(--dark-blue);
        border-radius: 25px;
        padding: 5px 17px 5px 17px;
        margin-top: 1.5rem;

        P {
            color: hsla(25, 97%, 53%, 0.8);
            font-weight: 700;
        }
    }

    h1 {
        color: var(--white);
        font-size: 1.8rem;
        margin: 1rem 0;
    }

    h2 {
        color: var(--white);
        margin: 2rem 0 1rem 0;
    }

    p {
        color: var(--medium-grey);
        font-size: 15px;
    }

    @media (max-width: 600px) {
        width: 340px;

        h1 {
            font-size: 1.7rem;
        }

        p {
            font-size: 14px;
        }
    }
`

const StarButton = styled.div`
    ${StyledButtonContainer}
`

const RatingButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
`

const SubmitButton = styled.button`
    background-color: var(--orange);
    color: var(--white);
    height: 45px;
    border: none;
    border-radius: 25px;
    font-weight: 700;
    letter-spacing: 3px;

    :hover {
        background-color: var(--white);
        color: var(--orange);
        cursor: pointer;
    }
`

const CardComponent = () => {
    const [selectedRating, setSelectedRating] = useState<number>(0);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const ratingValues: number[] = [1, 2, 3, 4, 5];

    const onSubmit = () => {
        if (selectedRating !== 0) {
            setIsSubmitted(true);
        }
    }

    return (
        <CardContainer isSubmitted={isSubmitted}>
            {!isSubmitted ?
                <>
                    <StarButton>
                        <img src={starIcon} alt="star" />
                    </StarButton>
                    <h1>How did we do?</h1>
                    <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                    <RatingButtonContainer>
                        {ratingValues.map(rating => {
                            return (
                                <RatingButton key={rating} value={rating} selectedRating={selectedRating} setSelectedRating={setSelectedRating}>
                                    <p>{rating}</p>
                                </RatingButton>
                            )
                        })}
                    </RatingButtonContainer>
                    <SubmitButton type="submit" onClick={onSubmit}>SUBMIT</SubmitButton>
                </>
                :
                <>
                    <div >
                        <img src={completedIcon} alt="submitted" />
                    </div>
                    <div className="rating-overview">
                        <p>You selected {selectedRating} out of 5</p>
                    </div>
                    <h2>Thank you!</h2>
                    <p>We appreciate you taking the time to give a rating. If you ever need more support, don&apos;t hesitate to get in touch!</p>
                </>
            }
        </CardContainer>
    );
};

export default CardComponent;