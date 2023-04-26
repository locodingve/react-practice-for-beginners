import PropTypes from "prop-types";
import styles from "./Button.module.scss";

function Button({ text, onClick }) {
  return <button className={styles.title} onClick={onClick}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;