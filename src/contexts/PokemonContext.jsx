import { createContext, useState } from "react"
import api from "../services/api"

export const PokemonContext = createContext({})

function PokemonProvider({ children }) {
  const [allPokemon, setAllPokemon] = useState([])
  const [myPokemon, setMyPokemon] = useState([])

  function getPokemon() {
    api.get("?/limit=151").then((res) => setAllPokemon(res.data.results))
  }

  function addPokemon(name) {
    const pokemon = api.get(`${name}`).then((res) => {
      !myPokemon.find((pokemon) => pokemon.name === res.data.name) &&
        setMyPokemon([...myPokemon, res.data])
    })
  }

  function deletePokemon(name) {
    const pokemonFiltered = myPokemon.filter((pokemon) => pokemon.name !== name)
    setMyPokemon([...pokemonFiltered])
  }

  return (
    <PokemonContext.Provider
      value={{ allPokemon, myPokemon, getPokemon, addPokemon, deletePokemon }}
    >
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider
