import styles from "./Button.module.scss";

function Button({ onClick, showing }) {
  return <button className={styles.title} onClick={onClick}>{ showing? 'Hide' : 'Show'}</button>;
}


export default Button;