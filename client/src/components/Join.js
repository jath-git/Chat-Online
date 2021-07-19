import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';
import './global.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="outer">
            <div id="joinInner">
                <h1>Join Lobby</h1>
                <table>
                    <tr>
                        <input type="text" placeholder="Enter user name" onChange={e => setName(e.target.value)} />
                    </tr>
                    <tr>
                        <input type="text" placeholder="Enter lobby name" className="mt-20" onChange={e => setRoom(e.target.value)} />
                    </tr>
                    <tr>
                        <Link to={`/chat?name=${name}&room=${room}`} onClick={e => !name || !room ? e.preventDefault() : null}>
                            <button className="mt-20" type="submit">Sign In</button>
                        </Link>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Join;