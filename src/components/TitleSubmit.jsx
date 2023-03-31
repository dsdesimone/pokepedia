import React from 'react'
import pokename from '../photos/pokemon-name.png'
import pokeball from '../photos/pokeball.png'

const TitleSubmit = ({ handleSubmit }) => {
  return (
    <div className='TitleSubmit'>
        <img className='pokemon__logo' src={pokename} alt="" />
        <form className='form__container' onSubmit={handleSubmit}>
            <input id='namePokemon' type="text" />
            <button className='btn__submit'><img src={pokeball} alt="" /></button>
        </form>
    </div>
  )
}

export default TitleSubmit