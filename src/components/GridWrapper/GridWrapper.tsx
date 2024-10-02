import { ReactNode } from "react";
import styles from "../GridWrapper/GridWrapper.module.css";

type Props = {
  children: ReactNode;
};

/**
 * GridWrapper component that provides a styled container for grid components.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {ReactNode} props.children - The child elements to be rendered within the grid wrapper.
 * @returns {JSX.Element} The rendered GridWrapper component containing the children.
 */
export const GridWrapper = ({ children }: Props) => {
  return <div className={`ag-theme-alpine ${styles.gridWrapper}`}>{children}</div>;
};
