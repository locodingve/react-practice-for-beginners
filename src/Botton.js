import PropTypes from "prop-types";
import styles from "./Button.module.scss";

function Button({ text }) {
  return <button className={styles.title}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;