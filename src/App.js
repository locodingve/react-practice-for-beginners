import { useState, useEffect } from 'react';
import Button from './Botton';
import styles from './App.module.scss';

function Hello() {
  useEffect(function () {
    console.log('hi1 :) ');
    return function() {
      console.log('bye1 :( ')
    }
  }, []);
  useEffect(() => {
    console.log('hi :) ');
    return () => console.log('bye :( ');
  }, []);
  return <h1 className={styles.title}>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prve) => !prve);
  console.log("APP.....");
  return (
    <div>
      {showing && <Hello />}
      <Button onClick={onClick} showing={showing} />
    </div>
  );
}


export default App;
