import React from 'react'

const CardPoke = ({ pokemon }) => {
    console.log(pokemon)
    return (
        <div className='CardPoke'>
            <div className='poke__main'>
                <img className='poke__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
                <h1 className='poke__name'>{pokemon?.name.toUpperCase()}</h1>
            </div>
            <ul className='poke__list'>
                <li><b>Weight: </b>{pokemon?.weight} hg</li>
                <li><b>Height: </b>{pokemon?.height} dam</li>
                <li><b>Skills: </b>{pokemon?.abilities[0].ability.name}, {pokemon?.abilities[1].ability.name}</li>
                <li><b>Moves: </b>{pokemon?.moves[0].move.name}, {pokemon?.moves[1].move.name}, {pokemon?.moves[2].move.name}</li>
            </ul>
        </div>
  )
}

export default CardPoke