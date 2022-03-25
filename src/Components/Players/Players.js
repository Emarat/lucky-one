import React, { useEffect, useState } from 'react';
import Body from '../Body/Body';
import './Players.css';

const Players = () => {
    const [players, setPlayer] = useState([]);
    useEffect(() => {
        fetch('playlist.json')
            .then(res => res.json())
            .then(data => setPlayer(data.PLAYERS))
    }, [])
    return (
        <div className='players'>
            <div className='playersUI'>
                {
                    players.map(player => <Body
                        key={player.id}
                        player={player}
                    ></Body>)
                }
            </div>
            <div>
                <h3>PLAYING XI</h3>
            </div>
        </div>
    );
};

export default Players;