import styled from "styled-components";

import { TYPE_TALK_COLOR } from "config/constants";

import { Box, Text, TalkTypeTag } from "components";

export const SlotWrapper = styled(Box)<{ location: string; type?: string }>`
  grid-area: ${({ location = "" }) =>
    location.split(" ").slice(-1).join().toLowerCase()};
  padding: 1rem;
  border-radius: 0.5rem;
  transition: all ease-in-out 0.2s;
  border: 2px solid transparent;
  position: relative;

  &:hover {
    ${({ theme, type }) =>
      type ? `border-color: ${theme.colors[TYPE_TALK_COLOR[type]]};` : ""}
  }
`;

export const TalkTheme = styled(TalkTypeTag).attrs({ sizing: "sm" })<{
  type: string;
}>(
  ({ theme }) => `
  @media (max-width: ${theme.breakpoints.sm}px) {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
  }
`
);

export const TalkTitle = styled(Text)`
  cursor: pointer;
`
