export type City = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
};

export const CITIES: Record<string, City> = {
  tarija: {
    id: "tarija",
    name: "Tarija",
    latitude: -21.5354900,
    longitude: -64.7295600,
  },
  chuquisaca: {
    id: "chuquisaca",
    name: "Chuquisaca",
    latitude: -19.0429,
    longitude: -65.2554,
  },
  cochabamba: {
    id: "cochabamba",
    name: "Cochabamba",
    latitude: -17.3895000,
    longitude: -66.1568000,
  },

  santacruz: {
    id: "santacruz",
    name: "Santa Cruz",
    latitude: -17.7862900,
    longitude: -63.1811700,
  },
};
