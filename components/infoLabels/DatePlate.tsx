import { formatDistanceToNow, lightFormat } from "date-fns";

type Props = {
  type: "short" | "full" | "with-time";
  date: Date;
};

export const DatePlate = ({ type, date }: Props) => {
  console.log(date);
  const formattedDate = formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });
  const shortDate = lightFormat(new Date(date), "dd-MM-yyyy");
  return <div className="text-white text-[10px]">{shortDate}</div>;
};
