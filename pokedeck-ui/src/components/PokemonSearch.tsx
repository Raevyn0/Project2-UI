import { SyntheticEvent, useEffect, useState } from 'react'
import { Pokemon } from '../models/pokemon'
import Card from "./Card"

function PokemonSearch() {

    const [pokeData, setPokeData] = useState<Pokemon[]>([])
    const [filterPoke, setFilterPoke] = useState(pokeData)
    const [search, setSearch] = useState<String>("")

useEffect(() => {

    fetch(`https://api.pokemontcg.io/v2/cards/`)
    .then(res => res.json())
    .then(payload => setPokeData(payload.data as Pokemon[]))

    
}, [])

console.log(pokeData)

const filter = (e: SyntheticEvent) => {
    const keyword = ((e.target as HTMLInputElement).value);
    console.log('SEARCH', keyword)

    if (keyword === "") {
        setFilterPoke(pokeData)
    } else {
        const result = pokeData.filter((poke) => {
            return poke.name.toLowerCase().startsWith(keyword.toLowerCase())
        })
        setFilterPoke(result);
    }
    setSearch(keyword)
}
console.log('Filtered', filterPoke)

    if(filterPoke.length === 0  && !search) {
        return (
            <div>
            <input
                type="search"
                onChange={filter}
                placeholder="Filter"
            />
                home
                <div>
                    {   
                        pokeData.map((poke, idx) => {
                            return <Card key={idx} poke={poke} />
                        })
                    }
                </div>
            </div>
        )
    } else {
        return (
            <div>
            <input
                type="search"
                onChange={filter}
                placeholder="Filter"
            />
                home
                <div>
                    {   
                        filterPoke.map((poke, idx) => {
                            return <Card key={idx} poke={poke} />
                        })
                    }
                </div>
            </div>
        )
    }

}

export default PokemonSearch