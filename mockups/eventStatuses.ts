type EventStatus = {
  key: EventStatusType;
  name: string;
};

type EventStatuses = {
  [key in EventStatusType]: EventStatus;
};

export const eventStatuses: EventStatuses = {
  "in-process": {
    key: "in-process",
    name: "В процесі",
  },
  "registration-date": {
    key: "registration-date",
    name: "Початок реєстрації",
  },
  "in-registration": {
    key: "in-registration",
    name: "Реєстрація відкрита",
  },
};
