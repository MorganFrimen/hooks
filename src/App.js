import React from 'react';
import './App.css';

function App() {
  const count = [1, 2, 3];
  const [numbers, setNumbers] = React.useState(count);
  const addNumbers = () => {
    const randNumber = Math.round(Math.random() * 10);
    const newArr = [...numbers, randNumber];
    setNumbers(newArr);
  };
  return (
    <div className="App">
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <button onClick={addNumbers}>Новое число</button>
    </div>
  );
}

export default App;
