import styled from "styled-components"

export const Container = styled.div`
  * {
    padding: 0;
    margin: 0;
  }

  width: 70%;
  height: max-content;

  display: flex;
  flex-direction: row-reverse;

  gap: 150px;
`

export const PokemonList = styled.ul`
  width: 250px;
  height: 350px;

  padding: 15px 15px;

  display: flex;
  flex-direction: column;
  gap: 5px;

  overflow: auto;

  background-color: ${(props) =>
    props.type === "all" ? "#e83838" : "#1e1e1e"};
  list-style: none;

  h2 {
    text-align: center;
    color: #fff;
    border-bottom: 2px solid #fff;
  }

  li {
    width: 100%;
    padding: 10px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: #fff;

    button {
      background-color: transparent;
      border: none;
      color: #fff;

      width: 30px;
      height: 30px;

      border-radius: 4px;
    }
  }
`
