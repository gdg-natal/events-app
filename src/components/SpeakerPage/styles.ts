import styled from "styled-components";

import { Text } from "components";

export const Container = styled.main`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 0;

  @media screen and (min-width: 800px) {
    padding: 3rem 0;
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
    margin-bottom: 5rem;
  }
`;

export const SpeakerAbout = styled.div`
  & h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 800px) {
    width: 50%;

    & h1 {
      font-size: 2.5rem;
      margin-bottom: 2.5rem;
    }
  }
`;

export const Paragraph = styled(Text)`
  font-size: 0.9rem;
  color: #5f6368;
  line-height: 135%;

  @media screen and (min-width: 800px) {
    font-size: 1.2rem;
  }
`;

export const SpeakerPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  margin-bottom: 2.5rem;

  @media screen and (min-width: 800px) {
    margin: 0;
    width: 47%;
  }
`;

export const TalkSection = styled.section`
  & > * + * {
    margin-top: 1.5rem;
  }

  & h2 {
    font-size: 1.25rem;
    font-weight: 700;
  }

  & h3 {
    font-size: 1rem;
    font-weight: 700;
  }

  @media screen and (min-width: 800px) {
    & h2 {
      font-size: 2rem;
    }

    & h3 {
      font-size: 1.3rem;
    }
  }
`;

export const TalkInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 420px;
  color: #5f6368;

  & > * + * {
    margin-top: 0.75rem;
  }

  & > div {
    display: inline-flex;
    align-items: center;
    font-size: 0.9rem;

    & svg {
      margin-right: 5px;
    }
  }

  @media screen and (min-width: 450px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > * + * {
      margin-top: 0;
    }
  }

  @media screen and (min-width: 800px) {
    & > div {
      font-size: 1rem;
    }
  }
`;

export const TalkTypeTag = styled.div<{ color: string }>`
  font-weight: 300;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
`;
