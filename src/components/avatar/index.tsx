import * as S from './styles'
import pathImage from '../images/agenda-4-128.png'

const Avatar = () => {
  return (
    <S.Navbar>
      <S.ProfilePhoto src={pathImage} />
      <h1>Contatos</h1>
    </S.Navbar>
  )
}

export default Avatar
