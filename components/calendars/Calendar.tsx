import { CalendarMenu } from "./CalendarMenu";
import { CalendarCard } from "./CalendarCard";

import events from "@/mockups/events.json";

export const Calendar = () => {
  return (
    <div>
      <CalendarMenu />
      <div className="flex flex-wrap justify-center gap-1">
        {events.map((raceEvent) => (
          <CalendarCard key={raceEvent.id} raceEvent={raceEvent} />
        ))}
      </div>
    </div>
  );
};
