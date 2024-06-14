import { SimulatorType } from "@/types";

type Simulator = {
  key: SimulatorType;
  name: string;
};

type Simulators = {
  [key in SimulatorType]: Simulator;
};

export const simulators: Simulators = {
  iracing: {
    key: "iracing",
    name: "iRacing",
  },
  "assetto-corsa": {
    key: "assetto-corsa",
    name: "Assetto Corsa",
  },
  raceroom: {
    key: "raceroom",
    name: "RaceRoom",
  },
};
