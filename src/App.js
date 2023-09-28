import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(new Date());
  const [show,setShow] = useState(true)
  const handleClick=()=>{
    console.log(count[8]+count[9])
    var date = new Date();

    console.log(date.getDate())
    if((count[8]+count[9]) == date.getDate()){
      console.log("It's your bday")
    setShow((prev)=> (!prev))

    }
    else{
      console.log("your bday will be soon!")
    }
  }
  return (
    <div className="App">
      <header className="App-header">
      {show? (
        <div className='' id='first'>
          <input type="date" name="time" id="time" value={count} onChange={(e)=>setCount(e.target.value)} />
          <button onClick={handleClick}>Click me</button>
        </div>
      ):(
        <img src="https://media.giphy.com/media/9ranhFobYyoIrmQLnB/giphy.gif" alt="" className=' ' height="700px" id='image'/>
        )}
      </header>
    </div>
  );
}

export default App;
