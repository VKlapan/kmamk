import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import { EmblaCarouselType } from "embla-carousel";
import { SliderItem } from "./SliderItem";

type UseDashButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDashButtonClick: (index: number) => void;
};

export const useDashButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDashButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDashButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDashButtonClick,
  };
};

type PropType = ComponentPropsWithRef<"button">;

export const DashButton: React.FC<PropType> = (props) => {
  const { className, ...restProps } = props;

  return (
    <button type="button" className="p-1" {...restProps}>
      <SliderItem isActive={className === "selected"} />
    </button>
  );
};
