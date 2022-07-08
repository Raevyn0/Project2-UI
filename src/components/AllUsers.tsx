import { useEffect, useState } from 'react'
import { Pokemon } from '../models/pokemon';
import { UserData } from '../models/userData';


function AllUsers() {

  const [users, setUsers] = useState<UserData[]>([]);
  const [pokeData, setPokeData] = useState<Pokemon[]>([])
  const [card, setCard] = useState([]);

    useEffect(() => {

        fetch(http://project2api-env.eba-hirmx2sb.us-west-1.elasticbeanstalk.com/pokedecks/users`)
        .then(res => res.json())
        .then(payload => setUsers(payload as UserData[]))

  
    }, [])

    useEffect(() => {

      fetch(`https://api.pokemontcg.io/v2/cards/`)
      .then(res => res.json())
      .then(payload => setPokeData(payload.data as Pokemon[]))
  
  }, [])

  console.log(pokeData)

    console.log('users', users)
    return (
      <>
        <h1>All users</h1>
        {users.map((user, idx) => (
          <div key={idx}>
            <h2>{user.username}</h2>
            <h2>{user.email}</h2>
          </div>
        ))}
      </>
    )
  }
  
  export default AllUsers
