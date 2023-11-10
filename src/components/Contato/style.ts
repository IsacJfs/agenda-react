import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

type TagProps = {
  $favorito: true | false
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.$favorito) {
    return variaveis.amarelo
  } else {
    return '#fff'
  }
  return '#ccc'
}

export const Card = styled.div<TagProps>`
  background-image: linear-gradient(
    to right,
    #fff,
    #fff,
    #fff,
    ${(props) => retornaCorDeFundo(props)}
  );
  box-shadow:
    8px 8px 25px rgba(13, 39, 80, 16),
    -14px -14px 24px #eee;
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  margin-top: 36px;
  display: grid;
  grid-template-columns: auto 32px;
`
export const BarraAcoes = styled.div`
  text-align: end;
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
export const BotaoImportante = styled(Botao)`
  background-color: ${variaveis.amareloEscuro};
`
export const Campos = styled.input`
  font-size: 16px;
  background-color: transparent;
  border: none;

  & :active {
    background-color: red;
  }
`
export const CampoName = styled.input`
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  margin-bottom: 8px;
`
export const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`
export const CheckboxContainer = styled.label`
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 8px;
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
