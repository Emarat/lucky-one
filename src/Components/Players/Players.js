import React, { useEffect, useState } from 'react';
import Body from '../Body/Body';
import './Players.css';

const Players = () => {
    const [players, setPlayer] = useState([]);
    const [squads, setSquads] = useState([]);

    const addToSquad = (player) => {
        const newSquad = [...squads, player];
        if (newSquad.length !== 12) {
            setSquads(newSquad)
        }
    }

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
                        addToSquad={addToSquad}
                    ></Body>)
                }
            </div>
            <div className='uiSideBar'>
                <h3>PLAYING XI</h3>
                {
                    squads.map(squad => <li>{squad.name}</li>)
                }
            </div>
        </div>
    );
};

export default Players;