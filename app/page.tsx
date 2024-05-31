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
export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.from("news").select("*");

  console.log(data);

  return (
    <>
      <header className="flex-none bg-neutral-600 px-10">HEADER</header>
      <main className="flex-grow bg-neutral-900 px-10 pt-4">
        {/* Block: Hero */}
        <HeroWrapper className="flex gap-4 flex-wrap lg:flex-nowrap mb-4">
          <HeroMain className="flex flex-col flex-grow w-full lg:min-w-[700px] bg-neutral-600">
            <HeroHeader className="flex justify-between">
              <HeroH1Wrapper className="flex gap-1">
                <HeroH1Icon className="flex justify-center items-center">
                  <svg className="w-4 h-4">
                    <use href="/icons/utils-sprite.svg#icon-hot"></use>
                  </svg>
                </HeroH1Icon>
                <HeroH1>Найголовніше</HeroH1>
              </HeroH1Wrapper>
              <HeroSlider className="flex gap-1">
                <HeroSliderItem>1</HeroSliderItem>
                <HeroSliderItem>2</HeroSliderItem>
                <HeroSliderItem>3</HeroSliderItem>
                <HeroSliderItem>4</HeroSliderItem>
              </HeroSlider>
            </HeroHeader>
            <HeroImage className="w-auto h-[400px] relative">
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
            MAIN NEWS
          </HeroMain>
          <HeroList className="w-full lg:w-72 bg-neutral-600">
            NEWS LIST
          </HeroList>
        </HeroWrapper>
        <PartnersList className="mb-4 w-full bg-neutral-600">
          Партнери
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
