import { useState, useEffect } from 'react';
import Button from './Botton';
import styles from './App.module.scss';


function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);

  console.log('I run all the time');
  useEffect( () => {
    console.log('CALL THE API .....');
  }, []);
  useEffect(() => {
    console.log('I run when "keyword" changes.');
  }, [keyword]);
  useEffect(() => {
    console.log('I run when "counter" changes.');
  }, [counter]);
  useEffect(() => {
    console.log('I run when keyword & counter change');
  }, [keyword, counter]);
  return (
    <div>
      <input 
        value={keyword} 
        onChange={onChange}
        type='text'
        placeholder='Search here ...'
      />
      <h1 className={styles.title}>{counter}</h1>
      <Button onClick={onClick} text={'click me'} />
    </div>
  );
}


export default App;
