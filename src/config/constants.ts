export const CALENDAR_ID = process.env.REACT_APP_CALENDAR_ID;
export const API_KEY = process.env.REACT_APP_API_KEY;

export const TYPE_TALK_COLOR: { [key: string]: string } = {
  Cloud: "blue",
  Carreira: "blue",
  "Machine Learning": "yellow",
  "Inteligência Artificial": "yellow",
  "Ciência de Dados": "yellow",
  Web: "green",
  "Programming Language Design": "green",
  Segurança: "red",
  Hardware: "red",
  default: "grey",
};

export const LOCATIONS_COLOR: { [key: string]: string } = {
  "Palco Morro do Careca": "blue",
  "Palco Genipabu": "yellow",
  "Palco Cajueiro": "green",
  default: "grey",
};
