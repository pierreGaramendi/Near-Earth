import { AgGridReact } from "ag-grid-react";
import { ColDef, ValueFormatterFunc, ValueFormatterParams } from "ag-grid-community";
import data from "./near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

let discoveryDateFilterParams = {
  comparator: (filterDate: Date, cellValue: string) => {
    const cellDate = new Date(cellValue);
    if (cellDate < filterDate) return -1;
    if (cellDate > filterDate) return 1;
    return 0;
  },
};

let discoveryDateValueFormatter: ValueFormatterFunc = (params: ValueFormatterParams) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };
  const date = new Date(params.value);
  return date.toLocaleDateString("en-US", options);
};

let phaValueFormatter: ValueFormatterFunc = (params: ValueFormatterParams) => {
  const responseMap: { [key: string]: string } = {
    Y: "Yes",
    N: "No",
  };
  return responseMap[params.value] || "";
};

const columnDefs: ColDef[] = [
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

const NeoGrid = (): JSX.Element => {
  return (
    <div className="ag-theme-alpine" style={{ height: 900, width: 1920 }}>
      <h1>Near-Earth Object Overview</h1>
      <AgGridReact rowData={data} columnDefs={columnDefs} rowGroupPanelShow={"always"} rowSelection={"multiple"} />
    </div>
  );
};

export default NeoGrid;
