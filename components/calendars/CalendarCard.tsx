import { CalendarCardDetailsItem } from "./CalendarCardDetailsItem";

type Props = {
  raceEvent: RaceEventType;
};
export const CalendarCard = ({ raceEvent }: Props) => {
  const { image, title, serverStartAt } = raceEvent;
  return (
    <div className="w-[272px] flex flex-col items-start gap-1 bg-bg3">
      <img className="w-[272px] h-[152px]" src={image} />
      <div className="p-4 flex flex-col gap-[10px]">
        <div className="text-sm font-medium text-white">{title}</div>
        <div className="w-full flex flex-col gap-[10px]">
          <div className="flex justify-between">
            <CalendarCardDetailsItem itemType="event" value={"5 етапів"} />
            <CalendarCardDetailsItem itemType="game" value={"ACC"} />
          </div>
          <div className="flex justify-between">
            <CalendarCardDetailsItem
              itemType="date"
              value={"26 січня 2024, 19:00"}
            />
            <CalendarCardDetailsItem itemType="drivers" value={"25"} />
          </div>
        </div>
      </div>
    </div>
  );
};
