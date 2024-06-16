type Props = {
  isActive?: boolean;
};

export const SliderItem = ({ isActive = false }: Props) => {
  var styles = "h-1 w-10";

  if (isActive) {
    styles = styles + " bg-blue-600";
  } else {
    styles = styles + " bg-neutral-600";
  }

  return <div className={styles}></div>;
};
