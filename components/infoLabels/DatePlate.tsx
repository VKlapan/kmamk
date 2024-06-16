import { formatDistanceToNow } from "date-fns";

type Props = {
  type: "short" | "full" | "with-time";
  date: Date;
};

export const DatePlate = ({ type, date }: Props) => {
  console.log(date);
  const formattedDate = formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });
  return <div className="text-white">{formattedDate}</div>;
};
