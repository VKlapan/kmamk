import {
  HeroWrapper,
  HeroMain,
  HeroImage,
  HeroList,
  HeroHeader,
  H2,
  H2Icon,
  H2Wrapper,
  HeroDescription,
  Labels,
  NewsSimulator,
  NewsType,
  NewsTitle,
  NewsDate,
  PartnersList,
  EventsCalendar,
  VideoList,
  HeroSlider,
} from "@/components/StyledComponents";

import Image from "next/image";
import {
  Calendar,
  DatePlate,
  Label,
  NewsCard,
  Partners,
  Slider,
  SliderItem,
  Video,
} from "@/components";

import mockups from "@/mockups/mockups.json";

export const SliderNews = () => {
  const typedMockups = {
    eventStatuses: mockups.eventStatuses as MockupType<EventStatusType>,
    simulators: mockups.simulators as MockupType<SimulatorType>,
    newsCategories: mockups.newsCategories as MockupType<NewsCategoryType>,
  };

  return (
    <>
      <HeroImage className="w-auto h-[492px] relative mb-10">
        <Image
          src={"/images/anons.png"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
          }}
          alt="Anons Image"
        />
      </HeroImage>
      <HeroDescription className="flex flex-col gap-3 absolute bottom-0 w-full px-5 py-4">
        <div className="flex justify-between items-center pt-4 ">
          <Labels className="flex gap-1">
            <Label type="simulator" value={typedMockups.simulators.iracing} />
            <Label
              type="newsCategory"
              value={typedMockups.newsCategories.broadcast}
            />
          </Labels>
          <DatePlate type="short" date={new Date(Date.now())} />
        </div>
        <div className="text-white text-2xl ">
          Запрошуємо на пряму трансляцію першої клубної гонки 2024 року!
        </div>
      </HeroDescription>
    </>
  );
};
