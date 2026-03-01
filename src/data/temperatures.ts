interface Temperature {
  type: string;
  calculate: boolean;
  value: number;
  convertToKelvin: (value: number) => number;
  convertFromKelvin: (kelvin: number) => number;
}

export const temperatureData: Temperature[] = [
  {
    type: "celsius",
    calculate: false,
    value: 0,
    convertToKelvin: (celcius: number) => {
      return celcius + 273.15;
    },
    convertFromKelvin: (kelvin: number) => {
      let celcius = kelvin - 273.15;
      return Math.round(celcius * 100) / 100;
    },
  },
  {
    type: "fahrenheit",
    calculate: false,
    value: 0,
    convertToKelvin: (fahrenheit: number) => {
      return (fahrenheit - 32) * (5 / 9) + 273.15;
    },
    convertFromKelvin: (kelvin: number) => {
      let fahrenheit = (kelvin - 273.15) * (9 / 5) + 32;
      return Math.round(fahrenheit * 100) / 100;
    },
  },
];
