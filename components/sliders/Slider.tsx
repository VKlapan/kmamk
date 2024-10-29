"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./SliderArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { SliderNews } from "./SliderNews";
import { DashButton, useDashButton } from "./SliderDashButtons";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

export const Slider: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDashButtonClick } =
    useDashButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla relative group">
      <div className="flex justify-end items-center">
        <div className="flex gap-1 mb-2">
          {scrollSnaps.map((_, index) => (
            <DashButton
              key={index}
              onClick={() => onDashButtonClick(index)}
              className={index === selectedIndex ? "selected" : ""}
            />
          ))}
        </div>
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <SliderNews />
            </div>
          ))}
        </div>
      </div>

      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </section>
  );
};
