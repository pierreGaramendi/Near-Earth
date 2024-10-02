import styles from "./GridHeader.module.css";

type Props = { title: string; clearSort: () => void };

/**
 * GridHeader component that displays a title and a button to clear filters and sorters.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.title - Title to be displayed.
 * @param {function} props.clearSort - Callback function to clear filters and sorters.
 * @returns {JSX.Element} The rendered GridHeader component.
 */
export const GridHeader = ({ title, clearSort }: Props) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <button className={styles.button} onClick={clearSort}>
        Clear Filters and Sorters
      </button>
    </div>
  );
};
