import React, { useRef, useState } from "react";
import styled from "styled-components";
import FormInput from "./FormInput";

export interface UserParamsProps {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}

interface UserParamsErrorProps {
    firstName: boolean,
    lastName: boolean,
    email: boolean,
    password: boolean,
}

const CardContainer = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 2.2rem;
    border-radius: 10px;
    box-shadow: 0px 6px 0px 0px rgba(0, 0, 0, 0.2);

    > p {
        font-size: 11px;
        text-align: center;
        color: var(--grayish-blue);

        span {
            font-weight: 700;
            color: var(--red);
            cursor: pointer;
        }
    }

    button {
        font-family: "Poppins";
        font-weight: 600;
        color: #fff;
        height: 50px;
        background-color: var(--green);
        border: none;
        border-radius: 5px;
        margin-bottom: 0.8rem;
        box-shadow: 0px 2px 0px 0px hsla(153, 56%, 33%, 0.5);

        :hover {
            opacity: 70%;
            cursor: pointer;
        }
    }

    @media (max-width: 900px) {
        padding: 1.5rem;
    }
`

const FormCard = () => {
    const [userParams, setUserParams] = useState<UserParamsProps>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    
    const [isParamError, setIsParamError] = useState<UserParamsErrorProps>({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
    });

    const isEmailError = useRef<boolean>(false);

    const nameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, tag: string) => {
        setUserParams(prevState => ({ ...prevState, [tag]: event.target.value }));

        if (event.target.value === "") {
            setIsParamError(prevState => ({ ...prevState, [tag]: true }));
        } else if (event.target.type === "email" && emailRef.current?.validity.valid) {
            isEmailError.current = false;
        } else {
            setIsParamError(prevState => ({ ...prevState, [tag]: false }));
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log(userParams);
        event.preventDefault();
        if (nameRef.current?.value === "") {
            setIsParamError(prevState => ({ ...prevState, firstName: true }));
        }
        if (lastNameRef.current?.value === "") {
            setIsParamError(prevState => ({ ...prevState, lastName: true }));
        }
        if (emailRef.current?.value === "") {
            setIsParamError(prevState => ({ ...prevState, email: true }));
        } else if (!emailRef.current?.validity.valid) {
            isEmailError.current = true;
        }
        if (passwordRef.current?.value === "") {
            setIsParamError(prevState => ({ ...prevState, password: true }));
        }
    }

    return (
        <CardContainer onSubmit={(e) => handleSubmit(e)} noValidate>
            <FormInput isError={isParamError.firstName} inputRef={nameRef} name="First Name" tag="firstName" handleChange={handleChange} />
            <FormInput isError={isParamError.lastName} inputRef={lastNameRef} name="Last Name" tag="lastName" handleChange={handleChange} />
            <FormInput isError={isParamError.email} inputRef={emailRef} fieldType="email" name="Email Address" tag="email" isEmailError={isEmailError.current} handleChange={handleChange} />
            <FormInput isError={isParamError.password} inputRef={passwordRef} fieldType="password" name="Password" tag="password" handleChange={handleChange} />
            <button type="submit">CLAIM YOUR FREE TRIAL</button>
            <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
        </CardContainer>
    );
};

export default FormCard;