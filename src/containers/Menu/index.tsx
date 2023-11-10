import FiltroMenu from '../../components/FiltroMenu'
import * as S from './styles'

const Menu = () => {
  return (
    <S.Aside>
      <>
        <S.Filtros>
          <FiltroMenu criterio="todos" legenda="Todos" />
          <FiltroMenu criterio="favorito" legenda="Favoritos" />
        </S.Filtros>
      </>
    </S.Aside>
  )
}
export default Menu
