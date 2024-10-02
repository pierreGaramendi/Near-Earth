/**
 * Parameters for the discovery date filter used in the Ag-Grid component.
 *
 * @type {Object}
 * @constant
 * @property {function} comparator - Function to compare the filter date with the cell value.
 * @param {Date} filterDate - The date provided by the filter.
 * @param {string} cellValue - The cell value (date as a string) to compare against the filter date.
 * @returns {number} Returns -1 if the cell date is before the filter date,
 *                      1 if it is after, or 0 if they are equal.
 */
export const discoveryDateFilterParams = {
  comparator: (filterDate: Date, cellValue: string) => {
    const cellDate = new Date(cellValue);
    if (cellDate < filterDate) return -1;
    if (cellDate > filterDate) return 1;
    return 0;
  },
};
