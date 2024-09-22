type Props = {
  raceEvent: RaceEventType;
};
export const CalendarCard = ({ raceEvent }: Props) => {
  const { image, title, serverStartAt } = raceEvent;
  return (
    <div className="w-[272px] flex flex-col items-start gap-1">
      <img className="w-[272px] h-[152px]" src={image} />
      <div>{title}</div>
      <div>{serverStartAt}</div>
    </div>
  );
};
