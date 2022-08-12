import { FaTrashAlt, FaPlusSquare } from "react-icons/fa"

function ListPokemons({ allPokemons, addPokemon, deletePokemon, myPokemon }) {
  return (
    <>
      <ul>
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
      </ul>

      <ul>
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
      </ul>
    </>
  )
}

export default ListPokemons
