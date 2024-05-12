"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const AuthButton = () => {
  const supabase = createClientComponentClient();

  const onLogIn = () => {
    supabase.auth.signInWithOAuth({
      provider: "discord",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };

  const onLogOut = () => {};

  return (
    <>
      <button onClick={onLogIn}>Log In</button>
      <button onClick={onLogOut}>Log Out</button>
    </>
  );
};
