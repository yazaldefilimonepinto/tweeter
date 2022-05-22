import styled from 'styled-components';

export const HomeMasterContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  gap: 1rem;
  padding: 1.5rem 0px !important;
  @media screen and (max-width: 880px) {
    grid-template-columns: 100%;
  }
`;
