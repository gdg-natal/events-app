import { LOCATIONS_COLOR, TYPE_TALK_COLOR } from "config/constants";

export const getLocationColor = (location: string) =>
  LOCATIONS_COLOR[location] ?? LOCATIONS_COLOR.default;

export const getTalkTypeColor = (location: string) =>
  TYPE_TALK_COLOR[location] ?? TYPE_TALK_COLOR.default;
