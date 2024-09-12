import React, {useState} from 'react';
import './App.css';
import style from './App.module.css'
import { Form } from './components/Form';
import { FormClass } from './components/FormClass';

function App() {
  const [count, setCount] = useState(1)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={handleClick}>click</button>
      {/* <Form message="Hello World" /> */}
      <FormClass />
    </div>
  );
}

export default App;
