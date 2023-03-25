import React, { useEffect, useState } from "react";
import styled from "styled-components";
import errorIcon from "../assets/icon-error.svg";

interface FormInputProps {
    isError: boolean,
    isEmailError?: boolean,
    inputRef: React.RefObject<HTMLInputElement>,
    name: string,
    tag: string,
    fieldType?: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>, key: string) => void,
}

interface InputProps {
    isError: boolean,
}

const InputContainer = styled.div<InputProps>`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.2rem;
    position: relative;

    > p {
        text-align: end;
        font-size: 11px;
        font-style: italic;
        color: var(--red);
        padding-top: 4px;
    }

    > div {
        display: flex;
        flex-direction: row;
        border: 1px solid ${props => props.isError ? "var(--red)" : "var(--grayish-blue)"};
        border-radius: 5px;

        :focus-within {
            outline: 1px solid ${props => props.isError ? "var(--red)" : "var(--blue)"};
        }

        img {
            align-self: center;
            display: block;
            height: 24px;
            width: 24px;
        }
    }


`

const Input = styled.input<InputProps>`
    font-family: "Poppins";
    font-weight: 600;
    color: ${props => props.isError ? "var(--red)" : "var(--dark-blue)"};
    height: 46px;
    width: ${props => props.isError ? "90%" : "100%"};
    border: none;
    border-radius: 5px;
    outline: none;
    caret-color: ${props => props.isError ? "var(--red)" : "var(--blue)"};
    padding: ${props => props.isError ? "1.5rem 1rem 1.5rem 2rem" : "1.5rem 2rem"};
`

const FormInput = ({ isError, isEmailError = false, inputRef, name, tag, fieldType, handleChange }: FormInputProps) => {

    const [isFieldError, setIsFieldError] = useState<boolean>(false);

    useEffect(() => {
        if (isError || isEmailError) {
            setIsFieldError(true);
        } else {
            setIsFieldError(false);
        }
    }, [isError, isEmailError])

    return (
        <InputContainer isError={isFieldError}>
            <div tabIndex={0}>
                <Input isError={isFieldError} ref={inputRef} type={fieldType} placeholder={name} onChange={(e) => handleChange(e, tag)} />
                {isFieldError && <img src={errorIcon} alt="error" />}
            </div>
            {isError && <p>{name} cannot be empty</p>}
            {isEmailError && <p>Looks like this is not an email</p>}
        </InputContainer>
    );
};

export default FormInput;