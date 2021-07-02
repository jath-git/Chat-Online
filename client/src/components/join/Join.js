import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div id="joinOuter">
            <div id="joinInner">
                <h1>Join</h1>
                <input type="text" onChange={e => setName(e.target.value)} />
                <input type="text" className="mt-20" onChange={e => setRoom(e.target.value)} />
                <Link to={`/chat?name=${name}&room=${room}`} onClick={e => !name || !room ? e.preventDefault() : null}>
                    <button className="mt-20" type="submit">Sign In</button>
                </Link>
            </div>
        </div>
    )
}

export default Join;