import * as S from './styles'
import { ReactComponent as IconeMenu } from '../icons/list.svg'
import pathImage from '../images/agenda-4-128.png'

const Avatar = () => {
  return (
    <S.Navbar>
      <S.ProfilePhoto src={pathImage} />
      <h1>Agenda Telefônica</h1>
      <S.BotaoMenu>
        <IconeMenu />
      </S.BotaoMenu>
    </S.Navbar>
  )
}

export default Avatar
