import { CalendarMenu } from "./CalendarMenu";
import { CalendarCard } from "./CalendarCard";

import events from "@/mockups/events.json";

export const Calendar = () => {
  return (
    <div className="flex flex-col justify-center">
      <CalendarMenu />
      <div className="flex flex-wrap justify-center gap-3">
        {events.map((raceEvent) => (
          <CalendarCard key={raceEvent.id} raceEvent={raceEvent} />
        ))}
      </div>
    </div>
  );
};
