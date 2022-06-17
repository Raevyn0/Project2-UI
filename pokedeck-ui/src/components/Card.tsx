import React from 'react'
import { Pokemon } from '../models/pokemon'

interface ICardProps {
    poke: Pokemon;
}

function Card(props: ICardProps) {

    return (
        <div>

            <h1>TEST</h1>
            <p>{props.poke.name}</p>
            <img src={props.poke.images.small} />
        </div>
    )
}

export default Card