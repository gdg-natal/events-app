import { HourType } from "../../types";

import { formatTime } from "utils";

import { Box, Loading } from "components";
import { SlotsHour, TimeTable, Time, Slots } from "./Scheduling.styles";
import SlotCard from "./SlotCard/SlotCard";
import useScheduling from "./useScheduling";

const Scheduling = () => {
  const { isLoading: calendarLoading, calendar } = useScheduling();

  if (calendarLoading) return <Loading />;

  return (
    <TimeTable>
      {calendar.map((dayHoursEvents: HourType) => (
        <SlotsHour key={dayHoursEvents.dateTime}>
          <Time as="h2" sizing="sm" color="grey">
            {formatTime(dayHoursEvents.dateTime)}
          </Time>
          <Slots>
            {dayHoursEvents.items.map(
              ({ id, summary, description, location }) => (
                <SlotCard key={id} {...{ summary, description, location, time: formatTime(dayHoursEvents.dateTime) }} />
              )
            )}
          </Slots>
        </SlotsHour>
      ))}
    </TimeTable>
  );
};

export default Scheduling;
