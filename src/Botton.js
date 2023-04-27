import styles from "./Button.module.scss";

function Button({ text }) {
  return <button className={styles.title} >{text}</button>;
}


export default Button;