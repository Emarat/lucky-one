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
            console.log(newSquad[1])
        }
        else {
            window.alert("You can't add more than 11 players!");
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
            <div>
                <div className='uiSideBar'>
                    <div>
                        <h3>PLAYING XI</h3>
                        {
                            squads.map(squad => <li
                                key={squad.id}>{squad.name}</li>)
                        }

                        <div className='cartBtn'>
                            <button className='btn-1'>
                                <p>CHOOSE CAPTAIN</p>
                            </button>
                            <button className='btn-1'>
                                <p>RESET</p>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Players;