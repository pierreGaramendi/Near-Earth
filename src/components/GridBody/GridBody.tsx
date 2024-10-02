import { AgGridReact } from "ag-grid-react";
import { INearEarthAsteroids } from "../../types/INearEarthAsteroids";
import data from "../../mock/near-earth-asteroids.json";
import { gridcolumnDefs } from "../../helpers/gridColumnDef";

type Props = {
  gridRef: React.RefObject<AgGridReact<INearEarthAsteroids>>;
};

/**
 * GridBody component that renders an Ag-Grid table displaying near-earth asteroids data.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {React.RefObject<AgGridReact<INearEarthAsteroids>>} props.gridRef - Reference object for the Ag-Grid React component.
 * @returns {JSX.Element} The rendered GridBody component with data and column definitions.
 */
export const GridBody = ({ gridRef }: Props) => {
  return <AgGridReact ref={gridRef} rowData={data} columnDefs={gridcolumnDefs} rowGroupPanelShow={"always"} />;
};
