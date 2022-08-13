import { useState } from "react"
import { Container } from "./styles"

const SearchPokemon = ({ searchPokemon }) => {
  const [search, setSearch] = useState("")

  return (
    <Container>
      <h2>Buscar meu Pokemon</h2>
      <form>
        <input
          type="text"
          placeholder="Exemplosauro"
          onChange={(event) => setSearch(event.target.value)}
        />
        <button onClick={(e) => e.preventDefault(searchPokemon(search))}>
          Pesquisar
        </button>
      </form>
    </Container>
  )
}

export default SearchPokemon
