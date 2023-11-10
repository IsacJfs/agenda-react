import * as S from './style'
import pathImage from '../images/agenda-4-128.png'

const ActionBar = () => {
  return (
    <S.Barra>
      <S.ProfilePhoto src={pathImage} />
      <S.Titulo>Contatos</S.Titulo>
    </S.Barra>
  )
}

export default ActionBar
