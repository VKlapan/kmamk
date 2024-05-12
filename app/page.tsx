import { AuthButton } from "@/components/AuthButton";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.from("news").select("*");

  console.log(data);

  return (
    <main>
      <AuthButton />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
