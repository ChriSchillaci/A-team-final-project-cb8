import styles from "./index.module.scss";

const Spinner = ({ typeClass = "" }) => {
  return <div className={`${styles.Spinner} ${styles[typeClass]}`}></div>;
};

export default Spinner;
