import { useState, useEffect } from 'react';
import Button from './Botton';
import styles from './App.module.scss';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if( toDo === '' ) {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo('');
  }

  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange}
          value={toDo}
          type='text'
          placeholder='write your to do ...'
        />
        <Button text={'Add To Do'} />
      </form>
    </div>
  );
}


export default App;
