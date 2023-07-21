import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

  const homeStyles = {
    marginTop: '5rem',
  };

  useEffect(() => {
    axios
    .get("http://localhost:3000/api/v1/users/1")
    .then((res) => 
      console.log(res)
      );
  }, []);

  return (
    <>

      <div style={homeStyles}>
        <Link to="/TicTacToe">
          <button>TicTacToe</button>
        </Link>
        <Link to="/RockPaperScissor">
          <button>RockPaperScissor</button>
        </Link>
        <Link to="/TowerOfHanoi">
          <button>TowerOfHanoi</button>
        </Link>
      </div>
    </>
  );
}
