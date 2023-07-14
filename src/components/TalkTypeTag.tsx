import styled from "styled-components";
import { lighten } from "polished";
import Text from "./Text";
import { TYPE_TALK_COLOR } from "config/constants";

const TalkTypeTag = styled(Text).attrs({ sizing: "sm" })<{ type: string }>(
  ({ theme, type }) => `
  background: ${
    theme.colors[TYPE_TALK_COLOR[type] ?? TYPE_TALK_COLOR["default"]]
  };
  color: ${lighten(
    0.2,
    theme.colors[
      (TYPE_TALK_COLOR[type] ?? TYPE_TALK_COLOR["default"]) + "Light"
    ]
  )};
  padding: ${theme.sizing.xxsm} ${theme.sizing.xsm};
  border-radius: ${theme.sizing.xxsm};
  text-align: center;
  white-space: nowrap;
`
);

export default TalkTypeTag;
