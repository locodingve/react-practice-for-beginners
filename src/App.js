import Button from './Botton';
import styles from './App.module.scss';

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome!!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
