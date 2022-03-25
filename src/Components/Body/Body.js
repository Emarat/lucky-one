import React from 'react';
import './Body.css';

const Body = (props) => {
    console.log(props.player)
    const { name, position, image } = props.player;
    return (
        <div className='body'>
            <div className='bodyUI'>
                <img src={image} alt="" />
                <p>Name: {name}</p>
                <p>Position: {position}</p>
            </div>
            <button onClick={() => props.addToSquad()} className='btn'>
                <p>ADD TO SQUAD</p>
            </button>
        </div>
    );
};

export default Body;