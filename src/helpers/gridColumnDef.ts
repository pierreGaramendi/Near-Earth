import { ColDef } from "ag-grid-community";
import { discoveryDateFilterParams } from "./gridFilters";
import { discoveryDateValueFormatter, phaValueFormatter } from "./gridFormatters";

/**
 * Array of column definitions for the Ag-Grid component displaying near-earth asteroids data.
 *
 * @type {ColDef[]}
 * @constant
 * @default
 * @property {Object[]} gridcolumnDefs - The column definitions for the grid.
 * @property {string} gridcolumnDefs[].field - The field name for the column.
 * @property {string} gridcolumnDefs[].headerName - The display name for the column header.
 * @property {boolean} [gridcolumnDefs[].sortable] - Indicates if the column can be sorted.
 * @property {boolean|string} [gridcolumnDefs[].filter] - Indicates if the column can be filtered, or the type of filter to apply.
 * @property {Object} [gridcolumnDefs[].filterParams] - Parameters for the column filter, if applicable.
 * @property {function} [gridcolumnDefs[].valueFormatter] - Function to format the cell value for display, if applicable.
 * @property {boolean} [gridcolumnDefs[].enableRowGroup] - Indicates if the column can be used for grouping rows.
 */
export const gridcolumnDefs: ColDef[] = [
  { field: "designation", headerName: "Designation", sortable: true, filter: true },
  {
    field: "discovery_date",
    headerName: "Discovery Date",
    sortable: true,
    filter: "agDateColumnFilter",
    filterParams: discoveryDateFilterParams,
    valueFormatter: discoveryDateValueFormatter,
  },
  { field: "h_mag", headerName: "H (mag)", sortable: true, filter: "agNumberColumnFilter" },
  { field: "moid_au", headerName: "MOID (au)", sortable: true, filter: "agNumberColumnFilter" },
  { field: "q_au_1", headerName: "q (au)", sortable: true, filter: "agNumberColumnFilter" },
  { field: "q_au_2", headerName: "Q (au)", sortable: true, filter: "agNumberColumnFilter" },
  { field: "period_yr", headerName: "Period (yr)", sortable: true, filter: "agNumberColumnFilter" },
  { field: "i_deg", headerName: "Inclination (deg)", sortable: true, filter: "agNumberColumnFilter" },
  {
    field: "pha",
    headerName: "Potentially Hazardous",
    sortable: true,
    filter: true,
    valueFormatter: phaValueFormatter,
  },
  { field: "orbit_class", headerName: "Orbit Class", enableRowGroup: true, sortable: true, filter: true },
];
