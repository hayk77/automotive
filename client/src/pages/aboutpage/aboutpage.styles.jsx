import styled from 'styled-components';

import fb from '../../assets/fb.png';
import linkedin from '../../assets/in.png';
import insta from '../../assets/insta.png';

export const AboutPageContainer = styled.div`
  background-color: #000000;
  height: 95vh;
  padding: 20px 40px;
`;

export const AboutPageH1 = styled.h1`
  color: #ffd300;
`;

export const AboutPageH3 = styled.h3`
  color: #ffd300;
`;

export const AboutPageIcons = styled.div`
  display: flex;
`;
export const AboutPageFb = styled.div`
  background-image: url(${fb});
  background-size: cover;
  cursor: pointer;
  flat: left;
  margin: 10px 3px;
  width: 30px;
  height: 30px;
`;
export const AboutPageInsta = styled.div`
  background-image: url(${insta});
  background-size: cover;
  cursor: pointer;
  flat: left;
  margin: 10px 3px;
  width: 30px;
  height: 30px;
`;
export const AboutPageLinkedin = styled.div`
  background-image: url(${linkedin});
  background-size: cover;
  cursor: pointer;
  flat: left;
  margin: 10px 3px;
  width: 30px;
  height: 30px;
`;
