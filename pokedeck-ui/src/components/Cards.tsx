import React, { SyntheticEvent } from 'react'
import { Pokemon } from '../models/pokemon'

interface ICardProps {
    poke: Pokemon;
}

function Cards(props: ICardProps) {

    let addFavorite = () => {
        console.log(props.poke.id);
        console.log(`https://api.pokemontcg.io/v2/cards/${props.poke.id}`)
    }

    return (
        <div>
            <p>{props.poke.name}</p>
            <img src={props.poke.images.small} alt={props.poke.name} />
            <button onClick={addFavorite}>Add to Favorites</button>
        </div>
    )
}

export default Cards