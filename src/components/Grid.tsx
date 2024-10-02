import { AgGridReact } from "ag-grid-react";
import { useRef } from "react";
import { INearEarthAsteroids } from "../types/INearEarthAsteroids";
import { GridHeader } from "./GridHeader/GridHeader";
import { GridWrapper } from "./GridWrapper/GridWrapper";
import { GridBody } from "./GridBody/GridBody";

/**
 * NeoGrid component that displays a grid of near-Earth objects using Ag-Grid.
 *
 * @component
 * @returns {JSX.Element} The rendered NeoGrid component containing the grid header and body.
 */
const NeoGrid = (): JSX.Element => {
  // Reference to the AgGridReact instance
  const gridRef = useRef<AgGridReact<INearEarthAsteroids>>(null);

  /**
   * Clears the current sorting and filter models in the grid.
   * Resets all columns to their default state.
   */
  const clearSort = () => {
    gridRef.current!.api.setFilterModel(null);
    gridRef.current!.columnApi.applyColumnState({
      defaultState: { sort: null },
    });
  };

  return (
    <GridWrapper>
      <GridHeader title="Near-Earth Object Overview" clearSort={clearSort}></GridHeader>
      <GridBody gridRef={gridRef} />
    </GridWrapper>
  );
};

export default NeoGrid;
