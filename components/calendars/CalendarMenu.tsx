import { CalendarSelect } from "./CalendarSelect";

export const CalendarMenu = () => {
  const calendarGames = [
    { icon: "/icons/acc.png", name: "ACC" },
    { icon: "/icons/ir.png", name: "iRacing" },
  ];
  const calendarEvents = [
    { name: "Championship" },
    { name: "Rate Event" },
    { name: "Club Event" },
  ];

  const calendarDates = [
    { name: "This Week" },
    { name: "This month" },
    { name: "Today" },
  ];
  return (
    <div className="w-full mb-3 justify-center flex gap-2">
      <CalendarSelect label={"Games"} items={calendarGames} />
      <CalendarSelect label={"Event type"} items={calendarEvents} />
      <CalendarSelect label={"When"} items={calendarDates} />
    </div>
  );
};
