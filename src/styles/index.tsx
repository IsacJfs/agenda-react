import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Mono', monospace;
  list-style: none;
  max-width: 1024px;
}
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
  overflow: hidden;

  @media (max-width: 768px) {
    display: block;
  }
`
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
  width: 100%;
`
export const Titulo = styled.h1`
  padding: 16px 0;
`
export const Botao = styled.button`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default GlobalStyle
