import styled from "styled-components"

export const Container = styled.div`
  width: 20%;
  height: 200px;

  background-color: #fafafa;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 90%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  input {
    height: 50px;
    width: 100%;

    background-color: #d9d9d9;
    border: none;
    border-radius: 8px;
  }

  button {
    width: 150px;
    height: 40px;

    cursor: pointer;

    border: none;
    border-radius: 4px;
    color: #fafafa;
    background-color: #e83838;
  }
`
