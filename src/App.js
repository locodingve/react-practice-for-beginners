import { useState } from 'react';
import Button from './Botton';
import styles from './App.module.scss';


function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("call an api");
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <Button onClick={onClick} text={'click me'} />
    </div>
  );
}


export default App;
