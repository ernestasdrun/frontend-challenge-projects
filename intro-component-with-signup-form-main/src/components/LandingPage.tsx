import React from "react";
import styled from "styled-components";
import FormCard from "./FormCard";

const MainContainer = styled.div`
    display: flex;
    max-width: 1500px;

    > div:first-child {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        justify-content: center;
        width: 50%;
        padding: 0 1rem 0 9.3rem;

        h1 {
            font-size: 2.8rem;
            line-height: 3rem;
            color: #fff;
            padding-bottom: 1rem;
        }

        p {
            font-size: 15px;
            color: #fff;
            padding-top: 1rem;
        }
    }

    > div:last-child {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
        padding: 4.5rem 9.3rem 4.5rem 1rem;

        > div:first-child {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            height: 55px;
            margin-bottom: 1.5rem;
            background-color: var(--blue);
            border-radius: 10px;
            box-shadow: 0px 6px 0px 0px rgba(0, 0, 0, 0.2);

            p {
                font-weight: 600;
                color: #fff;
                span {
                    font-weight: 400;
                }
            }
        }
    }

    @media (max-width: 1100px) {
        > div:first-child {
            padding-left: 5rem;
        }

        > div:last-child {
            padding-right: 5rem;
        }
    }

    @media (max-width: 900px) {
        flex-direction: column;

        > div:first-child {
            text-align: center;
            width: 100%;
            padding: 3rem 1.5rem 3rem 1.5rem;

            h1 {
                font-size: 30px;
                line-height: 2rem;
            }

            p {
                font-size: 16px;
                padding-top: 5px;
            }

        }
        > div:last-child {
            width: 100%;
            padding: 0 1.5rem 4rem 1.5rem;

            > div:first-child {
                padding: 2.2rem 5rem;
                text-align: center;
                font-size: 13px;
            }
        }
    }
`

const LandingPage = () => {
    return (
        <MainContainer>
            <div>
                <h1>Learn to code by watching others</h1>
                <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
            </div>
            <div>
                <div>
                    <p>Try it fee 7 days <span>then $20/mo. thereafter</span></p>
                </div>
                <FormCard />
            </div>
        </MainContainer>
    );
};

export default LandingPage;