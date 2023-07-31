import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const homeStyles = {
    marginTop: '4rem',
  };

  const getData = () =>
    fetch('http://localhost:3000/api/v1/users/1').then(
      (res) => res.json(),
    )
  const { data } = useQuery({ queryKey: ["games"], queryFn: getData })
  
  return (
    <>
      <div style={homeStyles}>
        {data? (
          <>
            <h1>{data.current_user.username}'s Profile</h1>
            <p>Select Your Game To Play..</p>
            {data.games.map((game)=>(
              <Link to={game.name}> <button>{game.name}</button></Link>
            ))}
          </>
        ):(
          <p>Loading..</p>
        )}
      </div>
    </>
  );
}
