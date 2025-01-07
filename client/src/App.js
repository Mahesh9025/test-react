
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/message')
    .then((resp) => resp.json())
    .then((data) => {
      console.log("data", data)
      return setMessage(data.message)
    })
    .catch((error)=> console.log(error))
  },[])
  return (
    <div className="App">
      <p>{message? message: 'No Message..'}</p>
      
    </div>
  );
}

export default App;
