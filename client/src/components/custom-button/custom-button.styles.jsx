import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: #0b0c10;
  color: white;
  border: 1px solid white;

  &:hover {
    background-color: #0b0c10;
    color: #ffd300;
    border: 1px solid #ffd300;
  }
`;

const invertedButtonStyles = css`
  background-color: #0b0c10;
  color: white;
  border: 1px solid white;

  &:hover {
    background-color: #0b0c10;
    color: #ffd300;
    border: 1px solid #ffd300;
  }
`;

const googleSignInStyles = css`
  background-color: #66fcf1;
  color: #0b0c10;
  border: 1px solid #66fcf1;

  &:hover {
    background-color: #66fcf1;
    color: #0b0c10;
    border: 1px solid #46a29f;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
