import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Squares from './Components/squares'

function App() {
  const [square, setSquare] = useState(Array(9).fill(''));
  const [isXturn, setIsXturn] = useState(true);

  const handleClick = (index) =>{
    const copySqaures = [...square];
    copySqaures[index] = isXturn ? 'X' : '0';
    setIsXturn(!isXturn);
    setSquare(copySqaures);
  }
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className='container'>
        <div className="row">
          <Squares value={square[0]} handleClick={()=>handleClick(0)}/>
          <Squares value={square[1]} handleClick={()=>handleClick(1)}/>
          <Squares value={square[2]} handleClick={()=>handleClick(2)}/>
        </div>
        <div className="row">
          <Squares value={square[3]} handleClick={()=>handleClick(3)}/>
          <Squares value={square[4]} handleClick={()=>handleClick(4)}/>
          <Squares value={square[5]} handleClick={()=>handleClick(5)}/>
        </div>
        <div className="row">
          <Squares value={square[6]} handleClick={()=>handleClick(6)}/>
          <Squares value={square[7]} handleClick={()=>handleClick(7)}/>
          <Squares value={square[8]} handleClick={()=>handleClick(8)}/>
        </div>
      </div>
    </>
  )
}

export default App;
