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

import { eventStatuses } from "@/mockups/eventStatuses";
import { newsCategories } from "@/mockups/newsCategories";
import { simulators } from "@/mockups/simulators";

import mockups from "@/mockups/mockups.json";

const partnersMockup = [
  { id: 1, name: "Partner01", image: "/images/partner01.png" },
  { id: 2, name: "Partner02", image: "/images/partner02.png" },
  { id: 3, name: "Partner03", image: "/images/partner03.png" },
  { id: 4, name: "Partner04", image: "/images/partner04.png" },
  { id: 5, name: "Partner05", image: "/images/partner05.png" },
];

import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

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
      <header className="flex-none bg-bg2 py-3 border-b border-stroke_default">
        <div className="lg:w-[1180px] mx-auto">
          <div className="flex justify-between items-center text-white font-medium">
            <img src="kmamk-logo.svg" alt="" className="w-[188px]" />
            <div>
              <nav className="flex items-center gap-12 underline underline-offset-8">
                <div>Новини</div>
                <div>Календар змагань</div>
                <div>Відео</div>
              </nav>
            </div>
            <div className="py-2 px-3 flex gap-2 items-center text-text4 border border-text4 rounded">
              <div className="text-[16px] font-semibold">UA</div>
              <svg className="w-5 h-5 fill-text4">
                <use href="/icons/tools-sprite.svg#icon-chevron_down"></use>
              </svg>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-grow bg-bg1 pt-8 pb-20">
        <div className="lg:w-[1180px] mx-auto">
          {/* Block: Hero */}
          <HeroWrapper className="flex gap-4 flex-wrap lg:flex-nowrap mb-4">
            <HeroMain className="relative flex flex-col flex-grow lg:min-w-[700px] ">
              <HeroHeader className="absolute top-0 left-0 w-full flex justify-between items-center">
                <H2Wrapper className="flex gap-1 mb-2">
                  <H2Icon className="flex justify-center items-center">
                    <svg className="w-4 h-4">
                      <use href="/icons/categories-sprite.svg#icon-hot"></use>
                    </svg>
                  </H2Icon>
                  <H2 className="text-white">Найголовніше</H2>
                </H2Wrapper>
              </HeroHeader>
              <HeroWrapper className="mt-2">
                <Slider slides={SLIDES} options={OPTIONS} />
              </HeroWrapper>
            </HeroMain>
            <HeroList className="w-full lg:w-72">
              <H2Wrapper className="flex gap-1 mb-2">
                <H2Icon className="flex justify-center items-center">
                  <svg className="w-4 h-4">
                    <use href="/icons/categories-sprite.svg#icon-news"></use>
                  </svg>
                </H2Icon>
                <H2 className="text-white">Новини</H2>
              </H2Wrapper>
              <div className="flex flex-wrap gap-4">
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
              </div>
            </HeroList>
          </HeroWrapper>
          <PartnersList className="mb-4 w-full">
            <Partners partners={partnersMockup} />
          </PartnersList>

          <H2Wrapper className="flex gap-1 mb-2">
            <H2Icon className="flex justify-center items-center">
              <svg className="w-4 h-4">
                <use href="/icons/categories-sprite.svg#icon-calendar"></use>
              </svg>
            </H2Icon>
            <H2 className="text-white">Календар змагань</H2>
          </H2Wrapper>
          <EventsCalendar className="mb-4 w-full py-3 px-2 bg-bg2">
            <Calendar />
          </EventsCalendar>

          <H2Wrapper className="flex gap-1 mb-2">
            <H2Icon className="flex justify-center items-center">
              <svg className="w-4 h-4">
                <use href="/icons/categories-sprite.svg#icon-video"></use>
              </svg>
            </H2Icon>
            <H2 className="text-white">Відео</H2>
          </H2Wrapper>
          <VideoList className="mb-4 w-full py-3 px-2 bg-bg2">
            <Video />
          </VideoList>
          <div className="flex justify-center">
            <div className="flex justify-center items-center gap-4 w-72 h-8 py-[10px] px-5 border-1 rounded bg-bg3 text-white text-sm font-medium">
              <div>Дивитись більше відео</div>
              <svg className="w-6 h-6">
                <use href="/icons/tools-sprite.svg#icon-right"></use>
              </svg>
            </div>
          </div>

          {/* <AuthButton />
        <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </div>
      </main>
      <footer className="flex-none bg-bg2 py-8 border-t border-stroke_default">
        <div className="lg:w-[1180px] mx-auto">
          <div className="flex justify-between text-white text-sm font-medium mb-10">
            <img src="kmamk-logo.svg" alt="" className="w-[188px]" />
            <div>
              <div className="mb-4 text-[16px] font-semibold">
                Навігація по сайту
              </div>
              <nav className="flex flex-col gap-1">
                <div>Новини</div>
                <div>Календар змагань</div>
                <div>Відео</div>
              </nav>
            </div>
            <div>
              <div className="mb-4 text-[16px] font-semibold">
                Наші контакти
              </div>
              <div className="flex flex-col gap-1">
                <div>testmail@gmail.com</div>
                <div>+38 066 999 00 12</div>
                <div>+38 066 999 00 13</div>
              </div>
            </div>
            <div>
              <div className="mb-4 text-[16px] font-semibold">
                Ми у соцмережах
              </div>
              <div className="flex gap-1">
                <div>DS</div>
                <div>TG</div>
                <div>IG</div>
                <div>YT</div>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-white text-xs">
            <div>&copy; 2010-2024 KMAMK</div>
            <div className="flex gap-4">
              <div>
                <span className="text-text4">Дизайн: </span>
                <span className="text-text2">Тимур Бірюков</span>
              </div>
              <div>
                <span className="text-text4">Розробка: </span>
                <span className="text-text2">ProFormula Team</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
