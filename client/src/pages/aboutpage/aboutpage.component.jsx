import React from 'react';

import {
  AboutPageContainer,
  AboutPageH1,
  AboutPageH3,
  AboutPageIcons,
  AboutPageFb,
  AboutPageInsta,
  AboutPageLinkedin
} from './aboutpage.styles';

const AboutPage = () => (
  <AboutPageContainer>
    <AboutPageH1>
      Automotive-ը հանդիսանում է ավտոմեքենայի պարագաների ներկրող Հայաստանում։
    </AboutPageH1>
    <AboutPageH3>
      Պատվիրված ապրանքանիշերը կարող եք ստանալ Երևան քաղաքում 10 աշխատանքային
      օրվա ընթացքում
    </AboutPageH3>
    <AboutPageH3>Երևանի տարածքում առաքումը ԱՆՎՃԱՐ է</AboutPageH3>
    <AboutPageIcons>
      <AboutPageFb />
      <AboutPageInsta />
      <AboutPageLinkedin />
    </AboutPageIcons>
  </AboutPageContainer>
);

export default AboutPage;
