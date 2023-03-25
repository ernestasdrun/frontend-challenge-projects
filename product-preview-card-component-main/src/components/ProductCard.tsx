import React from "react";
import styled from "styled-components";
import cartIcon from "../assets/icon-cart.svg";
import desktopImage from "../assets/image-product-desktop.jpg";
import mobileImage from "../assets/image-product-mobile.jpg";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 15px;
  border-radius: 10px;

  @media (min-width: 650px) {
    flex-direction: row;
    height: 440px;
    width: 600px;
  }
`

const ImageContainer = styled.div`
  border-radius: 10px 10px 0 0;
  
  img {
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 10px 10px 0 0;
  }

  @media (min-width: 650px) {
    border-radius: 10px 0 0 10px;
    width: 300px;

    img {
      border-radius: 10px 0 0 10px;
    }
  }
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background-color: var(--white);
  border-radius: 0 0 10px 10px;

  p {
    :first-child {
      color: var(--dark-grayish-blue);
      letter-spacing: 4px;
      font-size: 0.8rem;
      margin-top: 3px;
    }
    :nth-child(3) {
      color: var(--dark-grayish-blue);
      line-height: 22px;
    }
  }

  h1 {
    font-family: "Fraunces";
    color: var(--very-dark-blue);
    line-height: 32px;
    margin: 12px 0;
  }

  h2 {
    display: flex;
    align-items: center;
    font-family: "Fraunces";
    font-size: 1.9rem;
    color: var(--dark-cyan);
    margin: 1rem 0;

    span {
      font-family: "Montserrat";
      font-size: 0.8rem;
      font-weight: 500;
      color: var(--dark-grayish-blue);
      text-decoration-line: line-through;
      padding-left: 1.2rem;
    }
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: var(--white);
    background-color: var(--dark-cyan);
    height: 47px;
    font-weight: 700;
    border: none;
    border-radius: 8px;

    &:hover {
      background-color: hsl(157, 37%, 23%);
      cursor: pointer;
    }

    img {
      margin-right: 10px;
    }
  }

  @media (min-width: 650px) {
    width: 300px;
    border-radius: 0 10px 10px 0;
    padding: 2rem;

    h1 {
      margin: 20px 0;
    }

    h2 {
      margin: 25px 0;
    }
  }
`

const ProductCard = () => {
  return (
    <CardContainer>
      <ImageContainer>
        <picture>
          <source srcSet={desktopImage}
            media="(min-width: 650px)" />
          <img src={mobileImage} alt="product" />
        </picture>
      </ImageContainer>
      <ContentContainer>
        <p>PERFUME</p>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>A floral, solar and voluptuous interpretation composed by Oliver Polage, Perfumer-Creator for the House of CHANEL.</p>
        <h2>$149.99<span>$169.99</span></h2>
        <button>
          <img src={cartIcon} alt="cart" />
          <p>Add to Cart</p>
        </button>
      </ContentContainer>
    </CardContainer>
  );
};

export default ProductCard;