import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Join.css';
import './global.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="outer">
      <div className="joinInner">
        <h1>Join</h1>
        <div>
          <input placeholder="Name" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className="mt-20" type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
}
