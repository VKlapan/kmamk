"use client";

import Map from "@/components/map/Map";
import { useState } from "react";

export default function Home() {
  const [isSubheaderOn, setIsSubheaderOn] = useState(true);
  const onClickHandler = () => {
    setIsSubheaderOn((currentState) => !currentState);
  };

  return (
    <main className="flex flex-col h-screen">
      <div
        id="header"
        className="flex w-auto h-20 bg-red-200 flex-none justify-center"
      >
        <div>HEADER</div>
        <button onClick={onClickHandler}>Close SubHeader</button>
      </div>
      <div id="main-container" className="flex grow flex-col">
        <div
          id="subheader"
          className={
            isSubheaderOn ? `header__subheader` : `header__subheader--hidden`
          }
          //          className="flex flex-none justify-center h-10 bg-green-200 transition-height hover:h-0"
        >
          <div>CONTENT</div>
        </div>
        <div
          id="content"
          className="flex grow justify-between items-center bg-yellow-200"
        >
          <div className="grow h-full bg-lime-300 text-center ">Content</div>
          <div className="grow h-full bg-blue-300 text-center ">
            <Map />
          </div>
        </div>
      </div>
    </main>
  );
}
