import { FaTrashAlt, FaPlusSquare } from "react-icons/fa"
import { Container, PokemonList } from "./styles"

function ListPokemons({ allPokemons, addPokemon, deletePokemon, myPokemon }) {
  return (
    <Container>
      <PokemonList type="all">
        <h2>Todos os pokemons</h2>
        {allPokemons.map((pokemon, index) => {
          return (
            <li key={index + 1}>
              <h3>{pokemon.name}</h3>

              <button onClick={() => addPokemon(pokemon.name)}>
                <FaPlusSquare />
              </button>
            </li>
          )
        })}
      </PokemonList>

      <PokemonList>
        <h2>Meus Pokemons</h2>
        {myPokemon.map((pokemon, index) => {
          return (
            <li key={index + 1}>
              <h3>{pokemon.name}</h3>

              <button onClick={() => deletePokemon(pokemon.name)}>
                <FaTrashAlt />
              </button>
            </li>
          )
        })}
      </PokemonList>
    </Container>
  )
}

export default ListPokemons
