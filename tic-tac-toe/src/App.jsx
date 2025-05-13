import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Squares from './Components/squares'

function App() {
  const [square, setSquare] = useState(Array(9).fill(''));
  const [isXturn, setIsXturn] = useState(true);
  const [winner, setWinner] = useState(null);

  const checkWinner = (board) => {
    console.log(board);
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
      [0, 4, 8], [2, 4, 6]           // diagonals
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return board[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (winner || square[index] !== "") {
      return
    }
    const copySqaures = [...square];
    copySqaures[index] = isXturn ? 'X' : '0';
    setIsXturn(!isXturn);
    setSquare(copySqaures);
  }

  const reset = () => {
    setSquare(Array(9).fill(''));
    setIsXturn(true);
    setWinner(null);
  }

  useEffect(() => {
    const result = checkWinner(square);
  }, [square]);

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className='container'>
        <div className="row">
          <Squares value={square[0]} handleClick={() => handleClick(0)} />
          <Squares value={square[1]} handleClick={() => handleClick(1)} />
          <Squares value={square[2]} handleClick={() => handleClick(2)} />
        </div>
        <div className="row">
          <Squares value={square[3]} handleClick={() => handleClick(3)} />
          <Squares value={square[4]} handleClick={() => handleClick(4)} />
          <Squares value={square[5]} handleClick={() => handleClick(5)} />
        </div>
        <div className="row">
          <Squares value={square[6]} handleClick={() => handleClick(6)} />
          <Squares value={square[7]} handleClick={() => handleClick(7)} />
          <Squares value={square[8]} handleClick={() => handleClick(8)} />
        </div>
        {winner && <h2>{winner} won!</h2>}
        <button onClick={reset} className='reset'>RESET</button>
      </div>
    </>
  )
}

export default App;
