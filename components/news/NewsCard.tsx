import { Labels } from "../StyledComponents";
import { DatePlate, Label } from "@/components";

import mockups from "@/mockups/mockups.json";
import {
  EventStatusType,
  MockupType,
  NewsCategoryType,
  SimulatorType,
} from "@/types";

export const NewsCard = () => {
  const typedMockups = {
    eventStatuses: mockups.eventStatuses as MockupType<EventStatusType>,
    simulators: mockups.simulators as MockupType<SimulatorType>,
    newsCategories: mockups.newsCategories as MockupType<NewsCategoryType>,
  };

  return (
    <div className="w-72 py-2 px-4 bg-neutral-700 border border-neutral-400">
      <div className="text-white text-[14px] ">
        Запрошуємо на пряму трансляцію першої клубної гонки 2024 року!
      </div>

      <div className="flex justify-between pt-4 items-center">
        <DatePlate type="short" date={new Date(Date.now())} />
        <Labels className="flex gap-1">
          <Label type="simulator" value={typedMockups.simulators.iracing} />
          <Label
            type="newsCategory"
            value={typedMockups.newsCategories.broadcast}
          />
        </Labels>
      </div>
    </div>
  );
};
