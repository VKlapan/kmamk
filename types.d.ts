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
