import styled from "styled-components";

import { Text } from "components";

export const Container = styled.main`
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
  padding-top: 2rem;

  @media screen and (min-width: 800px) {
    padding-top: 3rem;
  }
`;

export const BackToHomeLink = styled(Text)`
  display: flex;
  font-size: 0.8rem;

  @media screen and (min-width: 800px) {
    font-size: 1rem;
  }
`;

export const SpeakerSection = styled.section`
  margin: 2.5rem 0;

  @media screen and (min-width: 800px) {
    display: flex;
    align-items: stretch;
    justify-content: space-between;

    margin-top: 3.5rem;
  }
`;

export const SpeakerAbout = styled.div`
  & h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  & p {
    font-size: 0.9rem;
    color: #5f6368;
    line-height: 135%;
  }

  @media screen and (min-width: 800px) {
    width: 50%;

    & h1 {
      font-size: 2.5rem;
      margin-bottom: 2.5rem;
    }

    & p {
      font-size: 1.2rem;
    }
  }
`;

export const SpeakerPicture = styled.div`
  background: red;
  width: 100%;
  height: 350px;

  margin-bottom: 2.5rem;

  @media screen and (min-width: 800px) {
    margin: 0;
    width: 47%;
  }
`;
