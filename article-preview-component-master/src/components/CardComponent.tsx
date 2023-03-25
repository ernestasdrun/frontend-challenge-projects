import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import avatar from "../assets/avatar-michelle.jpg";
import shareIcon from "../assets/icon-share.svg";
import PopupComponent from "./PopupComponent";
import MediaContainer from "./MediaContainer";

interface AuthorProps {
  isOpen: boolean,
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 280px;
  width: 740px;
  border-radius: 10px;
  overflow: hidden;

  > div:first-of-type {
    background-image: url("./src/assets/drawers.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    width: 38%;
  }

  > div:last-of-type {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 2rem 3rem;
    width: 62%;

    h1 {
      font-size: 1.7rem;
      color: var(--very-dark-grayish-blue);
      margin-bottom: 1rem;
    }

    > p {
      line-height: 20px;
      color: var(--desaturated-blue);
    }
  }

  @media (max-width: 870px) {
    flex-direction: column;
    height: 500px;
    width: 335px;

    > div:first-of-type {
      width: auto;
      height: 43%;
    }

    > div:last-of-type {
      width: auto;
      height: 57%;
      padding: 0;

      h1 { 
        font-size: 1.3rem;
        padding: 3rem 2.5rem 0rem 2.5rem; 
      }
      > p {
        font-size: 13px;
        padding: 0 2.5rem 0rem 2.5rem;
      }
    }
  }
`

const AuthorContainer = styled.div<AuthorProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1.2rem;

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 15px;

    h4 {
      color: var(--very-dark-grayish-blue);
      margin-bottom: 2px;
    }

    h5 {
      color: var(--grayish-blue);
      font-size: 12px;
      font-weight: 500;
    }
  }

  > img {
      display: block;
      width: 38px;
      height: 38px;
      border-radius: 100px;
  }

  > button {
    margin-left: auto;
    border: none;
    border-radius: 100px;
    background-color: ${props => props.isOpen ? "var(--desaturated-blue)" : "var(--light-grayish-blue)"};
    width: 33px;
    height: 33px;
    cursor: pointer;
    
    img {
      filter: ${props => props.isOpen ? "brightness(0) invert(1)" : "none"};
    }
  }

  @media (max-width: 870px) {
    margin-top: auto;
    padding: 1.2rem 2rem;
    background-color: ${props => props.isOpen ? "var(--very-dark-grayish-blue)" : "none"};
  }
`

const CardComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [windowSize, setWindowSize] = useState(0);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    setWindowSize(window.innerWidth);
    console.log(window.innerWidth);
  }, [window])

  return (
    <CardContainer>
      <div />
      <div>
        <h1>Shift the overall look and feel by adding these wonderful
          touches to furniture in your home
        </h1>
        <p>Ever been in a room and felt like something was missing? Perhaps
          it felt slightly bare and uninviting. I&apos;ve got some simple
          tips to help you make any room feel complete.
        </p>
        <AuthorContainer isOpen={isOpen}>
          {isOpen && windowSize <= 870 ?
            <div>
              <MediaContainer />
            </div>
            :
            <>
              <img src={avatar} alt="author" />
              <div>
                <h4>Michelle Appleton</h4>
                <h5>28 Jun 2020</h5>
              </div>
            </>
          }
          <button ref={buttonRef} onClick={handleClick}>
            <img src={shareIcon} alt="share" />
          </button>
          {isOpen && windowSize > 870 && <PopupComponent buttonRef={buttonRef} />}
        </AuthorContainer>
      </div>
    </CardContainer>
  );
};

export default CardComponent;