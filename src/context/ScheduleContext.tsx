import { PropsWithChildren, createContext } from "react";
import useScheduling from "hooks/useScheduling";
import { HourType } from "../types";

const ScheduleContext = createContext<{
  isLoading: boolean;
  calendar: Array<HourType>;
}>({ isLoading: true, calendar: [] });

type Props = PropsWithChildren<object>;

function ScheduleContextProvider({ children }: Props) {
  const { isLoading, calendar } = useScheduling();
  return (
    <ScheduleContext.Provider value={{ isLoading, calendar }}>
      {children}
    </ScheduleContext.Provider>
  );
}

export { ScheduleContext, ScheduleContextProvider };
