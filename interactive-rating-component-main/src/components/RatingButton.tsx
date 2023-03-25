import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

interface RatingButtonProps {
    value: number,
    selectedRating: number,
    setSelectedRating: React.Dispatch<React.SetStateAction<number>>,
    children: ReactNode,
}

interface ButtonProps {
    isSelected: boolean,
}

export const StyledButtonContainer = css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    width: 48px;
    border-radius: 100px;
    background-color: var(--dark-blue);
    color: var(--medium-grey);
    font-weight: 700;
`

const ButtonContainer = styled.div<ButtonProps>`
    ${StyledButtonContainer}
    background-color: ${(props) => props.isSelected ? "var(--light-grey)" : "none"} !important;

    p {
        color: ${(props) => props.isSelected ? "var(--white)" : "none"} !important;
    }

    :hover {
        cursor: pointer;
        background-color: var(--orange);

        p {
            color: var(--white);
        }
    }

    @media (max-width: 600px) {
        height: 43px;
        width: 43px;
    }
`

const RatingButton = ({ value, selectedRating, setSelectedRating, children }: RatingButtonProps) => {

    const isSelected = () => {
        if (selectedRating === value) {
            return true;
        }
        return false;
    }

    return (
        <ButtonContainer isSelected={isSelected()} onClick={() => setSelectedRating(value)}>
            {children}
        </ButtonContainer>
    );
};

export default RatingButton;