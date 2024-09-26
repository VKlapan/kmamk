type Props = {
  itemType: "events" | "date" | "game" | "drivers";
  value: string;
};
export const CalendarCardDetailsItem = ({ itemType, value }: Props) => {
  return (
    <div className="flex items-center gap-1">
      <svg className="w-4 h-4">
        <use href="/icons/utils-sprite.svg#icon-hot"></use>
      </svg>
      <div className="text-xs text-white font-semibold">{value}</div>
    </div>
  );
};
