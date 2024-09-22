type Props = {
  item: CalendarSelectItemType;
  cb?: (value: CalendarSelectItemType) => void;
};

export const CalendarSelectItem = ({ item, cb }: Props) => {
  return (
    <div
      className="p-1 w-full flex gap-1 rounded  border"
      onClick={cb ? () => cb(item) : undefined}
    >
      {item.icon && <img src={item.icon} />}
      <div className="flex flex-grow justify-center">
        <div>{item.name}</div>
      </div>
    </div>
  );
};
