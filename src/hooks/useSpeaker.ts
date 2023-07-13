import { useContext } from "react";
import speakers from "config/speakers";
import { ScheduleContext } from "context/ScheduleContext";

export default function useSpeaker(slug: string) {
  const { calendar } = useContext(ScheduleContext);
  const speaker = speakers.find((speaker) => speaker.slug === slug);

  return { speaker };
}
