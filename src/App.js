import { useContext } from "react"
import { ToastContainer } from "react-toastify"
import ListPokemons from "./components/ListPokemons/ListPokemons"
import SearchPokemon from "./components/SearchPokemon"
import { PokemonContext } from "./contexts/PokemonContext"

import "./App.css"
import "react-toastify/dist/ReactToastify.css"

function App() {
  const {
    allPokemon,
    myPokemon,
    getPokemon,
    addPokemon,
    deletePokemon,
    searchPokemon,
  } = useContext(PokemonContext)

  getPokemon()

  return (
    <>
      <ToastContainer />
      <SearchPokemon searchPokemon={searchPokemon} />
      <ListPokemons
        allPokemons={allPokemon}
        myPokemon={myPokemon}
        addPokemon={addPokemon}
        deletePokemon={deletePokemon}
      />
    </>
  )
}

export default App
