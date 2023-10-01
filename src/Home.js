import React from "react";

export default function Home ( { user } ) {

  return (
    <div className="Home">
      <h2>welcome </h2>
      {user ? <h2>{user.username}</h2> : <h2>plz sign up!</h2>}
    </div>
    
  )
}