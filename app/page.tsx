import { AuthButton } from "@/components/AuthButton";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.from("news").select("*");

  console.log(data);

  return (
    <>
      <header className="flex-none bg-neutral-600 px-10">HEADER</header>
      <main className="flex-grow bg-neutral-900 px-10 pt-4">
        {/* Block: Hero */}
        <div id="hero" className="flex gap-4 flex-wrap lg:flex-nowrap">
          <div
            id="hero__news-main"
            className="flex flex-col flex-grow w-full lg:min-w-[700px] bg-neutral-600"
          >
            <div id="hero__title">Найголовніше</div>
            <div className="w-auto h-[400px] relative">
              <Image
                src={"/images/anons.png"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  objectFit: "cover",
                }}
                alt="Anons Image"
              />
            </div>
            MAIN NEWS
          </div>
          <div id="hero__news-list" className="w-full lg:w-72 bg-neutral-600">
            NEWS LIST
          </div>
        </div>
        {/* <AuthButton />
        <pre>{JSON.stringify(data, null, 2)}</pre> */}
      </main>
      <footer className="flex-none bg-neutral-600 px-10">FOOTER</footer>
    </>
  );
}
