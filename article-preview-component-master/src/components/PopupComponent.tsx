import React from "react";
import styled from "styled-components";
import MediaContainer from "./MediaContainer";

const POPUP_SIZE = 115;

interface PopupComponentProps {
  buttonRef: React.MutableRefObject<HTMLButtonElement | null>,
}

interface PopupProps {
  buttonRef: React.MutableRefObject<HTMLButtonElement | null>,
}

const StyledPopup = styled.div<PopupProps>`
  position: absolute;
  background-color: var(--very-dark-grayish-blue);
  border-radius: 10px;
  top: calc(${props => props.buttonRef.current && props.buttonRef.current.offsetTop -
    props.buttonRef.current.clientHeight}px - 26px - 18px);
  left: calc(${props => props.buttonRef.current && props.buttonRef.current.offsetLeft}px - ${POPUP_SIZE}px);

  :after {
    z-index: 0;
    content: "";
    position: absolute;
    border: 13px solid;
    border-color: var(--very-dark-grayish-blue) transparent transparent transparent;
    top: 100%;
    left: calc(50% - 13px);
  }

`

const PopupComponent = ({ buttonRef }: PopupComponentProps) => {
  return (
    <StyledPopup buttonRef={buttonRef}>
      <MediaContainer />
    </StyledPopup>
  );
};

export default PopupComponent;