import React from 'react';
import "./App.css";
import Board from "./components/board";

function App() {
  return (
    <div className='playground'>
      <div className='heading'>
      <h1 className='display-3'>Tic Tac Toe</h1>
      </div>
      <Board/>
    </div>
  );
}


export default App;
