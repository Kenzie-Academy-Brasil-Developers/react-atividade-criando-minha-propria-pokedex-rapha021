import { useContext } from "react"
import "./App.css"
import ListPokemons from "./components/ListPokemons"
import { PokemonContext } from "./contexts/PokemonContext"

function App() {
  const { allPokemon, myPokemon, getPokemon, addPokemon, deletePokemon } =
    useContext(PokemonContext)

  getPokemon()

  return (
    <>
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
