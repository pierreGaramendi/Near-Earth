import { AgGridReact } from "ag-grid-react";
import { ColDef, ValueFormatterFunc, ValueFormatterParams } from "ag-grid-community";
import data from "./near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useCallback, useRef } from "react";

export interface INearEarthAsteroids {
  designation: string;
  discovery_date: string;
  h_mag?: string;
  moid_au: string;
  q_au_1: string;
  q_au_2?: string;
  period_yr?: string;
  i_deg: string;
  pha: string;
  orbit_class: string;
}

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
  
  const gridRef = useRef<AgGridReact<INearEarthAsteroids>>(null);

  const clearSort = useCallback(() => {
    gridRef.current!.api.setFilterModel(null);
    gridRef.current!.columnApi.applyColumnState({
      defaultState: { sort: null },
    });
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: 900, width: 1920 }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1>Near-Earth Object Overview</h1>
        <button style={{ marginLeft: "15px" }} onClick={clearSort}>
          Clear Filters and Sorters
        </button>
      </div>
      <AgGridReact ref={gridRef} rowData={data} columnDefs={columnDefs} rowGroupPanelShow={"always"} rowSelection="multiple" />
    </div>
  );
};

export default NeoGrid;
