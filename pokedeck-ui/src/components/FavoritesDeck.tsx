import { User } from "../models/user";
import { SyntheticEvent, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Favorite } from "../models//favorites"
interface IFavoriteProps {
    userId: number | undefined
}

function Favorites(props: IFavoriteProps) {
const DummyData = [
{userid: 1, cardid:"sl7"},
{userid: 1, cardid:"sl5"}
]
const [data, setData] = useState (DummyData)
console.log(data)
    return(
         
        <>
            
            <h1>Favorites</h1>
            <h2>{data[0].userid}</h2>
            {data.map((Favs, idx)=> {
                <div key = {idx}><p>test</p></div>
            })}
            
        </> 

    )
}

export default Favorites
