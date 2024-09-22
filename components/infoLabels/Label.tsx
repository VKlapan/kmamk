type Props = {
  type: LabelType;
  value: LabelItemType<LabelKeyType>;
};

export const Label = ({ type, value }: Props) => {
  var styles =
    "rounded w-fit py-1 px-2 text-white text-xs font-semibold tracking-wider ";

  switch (true) {
    case type === "newsCategory":
      styles = styles + "border border-yellow-600";
      break;
    case type === "simulator":
      styles = styles + "border border-green-500";
      break;
    case type === "eventStatus" && value.key === "in-process":
      styles = styles + "border-0 bg-green-800";
      break;
    case type === "eventStatus" && value.key === "in-registration":
      styles = styles + "border-0 bg-blue-800";
      break;
  }

  return <div className={styles}>{value.name}</div>;
};
