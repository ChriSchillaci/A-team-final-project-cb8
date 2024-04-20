import { GoEye, GoEyeClosed } from "react-icons/go";
import styles from "./index.module.scss";

const PasswordToggle = ({ showPassword, setShowPassword }) => {
  return showPassword ? (
    <GoEye
      className={styles.eyeIcon}
      onClick={() => setShowPassword(!showPassword)}
    />
  ) : (
    <GoEyeClosed
      className={styles.eyeIcon}
      onClick={() => setShowPassword(!showPassword)}
    />
  );
};

export default PasswordToggle;
