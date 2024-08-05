import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import Reset from './components/Reset';

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  }

  const resetButton = () => {
    setCount(0);
  }


  return (
    <div className="App">
      <Counter counter={count} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      {count > 0 && <Reset onClick={resetButton} />}
    </div>
  );
}

export default App;
