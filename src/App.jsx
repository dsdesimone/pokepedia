import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import CardPoke from './components/CardPoke'
import ErrorFetch from './components/ErrorFetch'
import TitleSubmit from './components/TitleSubmit'

function App() {
  
  /** Consumir Poke Api */
  // DOCUMENTACION: http:// pokeapi.com/
  // Hacer un llamado a pokeapi que nos responda con la informacion
  // de su pokemon favorito (pikachu, charmander, squirtle, bulbasaur, ratatta)
  //Mostrar en consola que efectivamente esta recibiendo la info

  const [pokemon, setPokemon] = useState()
  const [inputValue, setInputValue] = useState('mareep')
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    let url = `https://pokeapi.co/api/v2/pokemon/${inputValue || 'mareep'}`
    
    axios.get(url)
      .then(res => {
        setPokemon(res.data)
        setHasError(false)
      })
      .catch(err => {
        console.log(err)
        setHasError(true)
        // setTimeout((
        //   setHasError(false)
        // ), 5000)
      })
  }, [inputValue])

  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(e.target.namePokemon.value.toLowerCase().trim())
    e.target.input.value = ''
  }
  //console.log(pokemon)

  return (
    <div className="App">
      <TitleSubmit handleSubmit={handleSubmit}/>
      {
        hasError 
          ? <ErrorFetch />
          : <CardPoke pokemon={pokemon} />  
      }
       
    </div>
  )
}

export default App
