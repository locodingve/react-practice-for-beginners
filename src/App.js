import { useState, useEffect } from 'react';
import Button from './Botton';
import styles from './App.module.scss';


function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("I run all the time");
  useEffect( () => {
    console.log("CALL THE API .....");
  }, []);
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <Button onClick={onClick} text={'click me'} />
    </div>
  );
}


export default App;
