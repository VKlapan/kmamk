import { AuthButton } from "@/components/AuthButton";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from "next/image";

import {
  HeroWrapper,
  HeroMain,
  HeroImage,
  HeroList,
  HeroHeader,
  HeroH1,
  HeroH1Icon,
  HeroH1Wrapper,
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
  HeroSliderItem,
} from "@/components/StyledComponents";

import { DatePlate, Label, Partners } from "@/components";

import { eventStatuses } from "@/mockups/eventStatuses";
import { newsCategories } from "@/mockups/newsCategories";
import { simulators } from "@/mockups/simulators";

import mockups from "@/mockups/mockups.json";
import {
  EventStatusType,
  MockupType,
  NewsCategoryType,
  SimulatorType,
} from "@/types";

const partnersMockup = [
  { id: 1, name: "Partner01", image: "/images/partner01.png" },
  { id: 2, name: "Partner02", image: "/images/partner02.png" },
  { id: 3, name: "Partner03", image: "/images/partner03.png" },
  { id: 4, name: "Partner04", image: "/images/partner04.png" },
  { id: 5, name: "Partner05", image: "/images/partner05.png" },
];

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.from("news").select("*");

  const typedMockups = {
    eventStatuses: mockups.eventStatuses as MockupType<EventStatusType>,
    simulators: mockups.simulators as MockupType<SimulatorType>,
    newsCategories: mockups.newsCategories as MockupType<NewsCategoryType>,
  };

  return (
    <>
      <header className="flex-none bg-neutral-600 px-10">HEADER</header>
      <main className="flex-grow bg-neutral-900 px-10 pt-4">
        {/* Block: Hero */}
        <HeroWrapper className="flex gap-4 flex-wrap lg:flex-nowrap mb-4">
          <HeroMain className="relative flex flex-col flex-grow w-full lg:min-w-[700px] ">
            <HeroHeader className="flex justify-between">
              <HeroH1Wrapper className="flex gap-1 mb-2">
                <HeroH1Icon className="flex justify-center items-center">
                  <svg className="w-4 h-4">
                    <use href="/icons/utils-sprite.svg#icon-hot"></use>
                  </svg>
                </HeroH1Icon>
                <HeroH1 className="text-white">Найголовніше</HeroH1>
              </HeroH1Wrapper>
              <HeroSlider className="flex gap-1">
                <HeroSliderItem>1</HeroSliderItem>
                <HeroSliderItem>2</HeroSliderItem>
                <HeroSliderItem>3</HeroSliderItem>
                <HeroSliderItem>4</HeroSliderItem>
              </HeroSlider>
            </HeroHeader>
            <HeroImage className="w-auto h-[400px] relative mb-10">
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
              <div className="flex justify-between pt-4 ">
                <Labels className="flex gap-1">
                  <Label
                    type="simulator"
                    value={typedMockups.simulators.iracing}
                  />
                  <Label
                    type="newsCategory"
                    value={typedMockups.newsCategories.broadcast}
                  />
                  <Label
                    type="eventStatus"
                    value={eventStatuses["in-process"]}
                  />
                  <Label
                    type="eventStatus"
                    value={eventStatuses["in-registration"]}
                  />
                </Labels>
                <DatePlate type="short" date={new Date(Date.now())} />
              </div>
              <div className="text-white text-2xl ">
                Запрошуємо на пряму трансляцію першої клубної гонки 2024 року!
              </div>
            </HeroDescription>
          </HeroMain>
          <HeroList className="w-full lg:w-72 bg-neutral-600">
            NEWS LIST
          </HeroList>
        </HeroWrapper>
        <PartnersList className="mb-4 w-full">
          <Partners partners={partnersMockup} />
        </PartnersList>
        <EventsCalendar className="mb-4 w-full bg-neutral-600">
          Календар змагань
        </EventsCalendar>
        <VideoList className="mb-4 w-full bg-neutral-600">Відео</VideoList>

        {/* <AuthButton />
        <pre>{JSON.stringify(data, null, 2)}</pre> */}
      </main>
      <footer className="flex-none bg-neutral-600 px-10">FOOTER</footer>
    </>
  );
}
