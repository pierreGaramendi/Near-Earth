import { ValueFormatterFunc, ValueFormatterParams } from "ag-grid-community";

/**
 * Formatter function for the discovery date used in the Ag-Grid component.
 *
 * @param {ValueFormatterParams} params - The parameters for the value formatter.
 * @param {string} params.value - The value to be formatted, expected to be a date string.
 * @returns {string} The formatted date as a string in "MMM dd, yyyy" format.
 */
export const discoveryDateValueFormatter: ValueFormatterFunc = (params: ValueFormatterParams) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };
  const date = new Date(params.value);
  return date.toLocaleDateString("en-US", options);
};

/**
 * Formatter function for the Potentially Hazardous Asteroid (PHA) field used in the Ag-Grid component.
 *
 * @param {ValueFormatterParams} params - The parameters for the value formatter.
 * @param {string} params.value - The value to be formatted, expected to be 'Y' or 'N'.
 * @returns {string} Returns "Yes" if the value is 'Y', "No" if the value is 'N', or an empty string if the value is unrecognized.
 */
export const phaValueFormatter: ValueFormatterFunc = (params: ValueFormatterParams) => {
  const responseMap: { [key: string]: string } = {
    Y: "Yes",
    N: "No",
  };
  return responseMap[params.value] || "";
};
