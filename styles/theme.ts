import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  color: {
    pink: "#FE0359",
    purple: "#8661de",
    blue: "#00bac7",
    gray: "#f6f6f6",
    green: "#07b495",
    lightGreen: "#99ecdd",
    darkGreen: "#356356",
    darkGray: "#54595d",
    darkGray2: "#312F30"
  },
  boxShadow: {
    normal: "0 3px 8px 0 rgb(0 0 0 / 10%)",
    purple: "0 3px 8px 0 #d6c9ff",
    blue: "0 3px 8px 0 #b3e2e6",
  },
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  xltablet: customMediaQuery(1200),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};