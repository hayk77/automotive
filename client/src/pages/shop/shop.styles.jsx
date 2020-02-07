import styled from 'styled-components';

export const ShopPageContainer = styled.div`
  width: 100%;
  padding: 10px 40px;

  @media screen and (max-width: 800px) {
    display: -webkit-flex;
    display: -ms-flexbox;
    -webkit-flex-direction: column;
    padding: 0;
    margin: 0 auto;
  }
`;
