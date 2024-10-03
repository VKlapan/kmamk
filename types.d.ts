type LabelType = "simulator" | "newsCategory" | "eventStatus";

type EventStatusType = "in-process" | "in-registration" | "registration-date";

type NewsCategoryType = "broadcast" | "anons" | "report";

type SimulatorType = "iracing" | "assetto-corsa" | "raceroom";

type Partner = {
  id: number;
  name: string;
  image: string;
};

type LabelKeyType = EventStatusType | NewsCategoryType | SimulatorType;

type LabelItemType<T extends LabelKeyType> = {
  key: T;
  name: string;
};

type MockupNameType = "eventStatuses" | "simulators" | "newsCategories";

type MockupType<T extends LabelKeyType> = {
  [key in T]: LabelItemType<key>;
};

type CalendarSelectItemType = {
  name: string;
  icon?: string;
};

type RaceEventType = {
  id: number;
  title: string;
  type: string;
  status: string;
  simulator: string;
  dlc: number;
  track: string;
  cars: number[];
  refereeing: number;
  refereePanel: number[];
  createdat: string;
  image: string;
  description: string;
  viewcount: number;
  eventsrelation: number[];
  driversrelation: number[];
  partners: number[];
  serverStartAt: string;
  eventStrtAt: string;
  registrationSatrtAt: string;
  registrationEndAt: string;
  link: string;
};

type VideoType = {
  id: number;
  name: string;
  createdat: string;
  card: string;
  type: string;
  // type: "interview" | "live" | "review" | "preview";
  event: number;
  description: string;
  link: string;
  viewcount: number;
};
