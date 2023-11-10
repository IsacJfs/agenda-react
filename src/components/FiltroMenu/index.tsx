import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../../store/reducers/filterReducer'
import { RootReducer } from '../../store'
import * as S from './styles'

export type Props = {
  legenda: string
  criterio: 'favorito' | 'normal' | 'todos'
}

const FiltroMenu = ({ legenda, criterio }: Props) => {
  const dispatch = useDispatch()
  const { filtro, contatcts } = useSelector((state: RootReducer) => state)

  const verificaFavorito = () => {
    const eFavorito = filtro.criterio === criterio

    return eFavorito
  }

  const contarcontatcts = () => {
    if (criterio === 'todos') return contatcts.contatos.length
    if (criterio === 'favorito') {
      return contatcts.contatos.filter((item) => item.favorito === true).length
    }
  }

  const filtrar = () => {
    dispatch(
      changeFilter({
        criterio
      })
    )
  }

  const contador = contarcontatcts()
  const ativo = verificaFavorito()

  return (
    <S.Card $ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroMenu
