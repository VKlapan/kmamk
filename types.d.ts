export type LabelType = "simulator" | "newsCategory" | "eventStatus";
export type EventStatusType =
  | "in-process"
  | "in-registration"
  | "registration-date";

export type NewsCategoryType = "broadcast" | "anons" | "report";

export type SimulatorType = "iracing" | "assetto-corsa" | "raceroom";

export type Partner = {
  id: number;
  name: string;
  image: string;
};

export type LabelKeyType = EventStatusType | NewsCategoryType | SimulatorType;

export type LabelItemType<T extends LabelKeyType> = {
  key: T;
  name: string;
};

export type MockupNameType = "eventStatuses" | "simulators" | "newsCategories";

export type MockupType<T extends LabelKeyType> = {
  [key in T]: LabelItemType<key>;
};
