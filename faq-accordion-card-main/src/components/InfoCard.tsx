import React from "react";
import styled from "styled-components";
import womanDesktop from "../assets/images/illustration-woman-online-desktop.svg"
import womanMobile from "../assets/images/illustration-woman-online-mobile.svg"
import boxDesktop from "../assets/images/illustration-box-desktop.svg"
import arrowDownIcon from "../assets/images/icon-arrow-down.svg"

const Wrapper = styled.div`
  position: relative;

  @media (min-width: 1111px) {
    :before {
      content: url(${boxDesktop});
      display: flex;
      align-items: center;
      position: absolute;
      top: calc(50% - 40px);
      left: -93px;
    }
  }
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 15px;
  background-color: #fff;
  overflow: hidden;

  @media (max-width: 1110px) {
    margin: 10rem 2rem;
    flex-direction: column;
    overflow: visible;
    height: auto;
  }
`

const GraphicsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -6.5rem;

  background-image: url("./src/assets/images/bg-pattern-desktop.svg");
  background-repeat: no-repeat;
  background-position: left bottom;
  background-position-x: -500px;
  background-position-y: -300px;

  @media (max-width: 1110px) {
    margin-left: 0;
    padding-bottom: 2.5rem;
    background-image: url("./src/assets/images/bg-pattern-mobile.svg");
    background-position: center center;
    background-position-y: -5px;

    img {
      height: 200px;
      width: 240px;
      margin-top: -10rem;
    }
  }
`

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 9rem;

  h1 {
    font-size: 2.4rem;
    color: var(--very-dark-desaturated-blue);
    margin-bottom: 3rem;
  }

  > div {
    width: 320px;
  }

  details {
    p {
      margin-top: 1rem;
      color: var(--dark-grayish-blue);
    }

    summary {
      display: flex;
      align-items: center;
      user-select: none;
      list-style: none;
      font-size: 13px;

      > img {
        margin-left: auto;
      }
    
      :hover {
        color: var(--soft-red);
        cursor: pointer;
      }
    }

    &[open] {
      summary {
        color: var(---very-dark-desaturated-blue);
        font-weight: 700;
  
        > img {
          transform: rotate(180deg);
        }
      }
    }

    :after {
      content: "";
      display: flex;
      border: 1px solid var(--light-grayish-blue);
      margin: 1.5rem 0;
    }
  }

  @media (max-width: 1110px) {
    padding: 2rem;

    > div {
      width: 270px;
    }

    h1 { text-align: center; }
  }
`

const InfoCard = () => {
  return (
    <Wrapper>
      <CardContainer>
        <GraphicsContainer>
          <picture>
            <source draggable srcSet={womanMobile} media="(max-width: 1110px)" />
            <img draggable src={womanDesktop} alt="woman" />
          </picture>
        </GraphicsContainer>
        <ContentBox>
          <h1>FAQ</h1>
          <div>
            <details>
              <summary>
                How many team members can I invite?
                <img src={arrowDownIcon} alt="dropdown" />
              </summary>
              <p>You can invite up to 2 additional users on the Free plan. There is no limit on
                team members for the Premium plan.</p>
            </details>
            <details>
              <summary>
                What is the maximum file upload size?
                <img src={arrowDownIcon} alt="dropdown" />
              </summary>
              <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>
            </details>
            <details>
              <summary>
                How do I reset my password?
                <img src={arrowDownIcon} alt="dropdown" />
              </summary>
              <p>Click “Forgot password” from the login page or “Change password” from your profile page.
                A reset link will be emailed to you.</p>
            </details>
            <details>
              <summary>
                Can I cancel my subscription?
                <img src={arrowDownIcon} alt="dropdown" />
              </summary>
              <p>Yes! Send us a message and we’ll process your request no questions asked.</p>
            </details>
            <details>
              <summary>
                Do you provide additional support?
                <img src={arrowDownIcon} alt="dropdown" />
              </summary>
              <p>Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>
            </details>
          </div>
        </ContentBox>
      </CardContainer>
    </Wrapper>
  );
};

export default InfoCard;