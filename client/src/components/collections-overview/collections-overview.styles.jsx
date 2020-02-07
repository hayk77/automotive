import styled from 'styled-components';

export const CollectionsOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
`;
