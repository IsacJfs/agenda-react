import Contato from '../../components/Contato'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaAZ = () => {
  const { contatos } = useSelector((state: RootReducer) => state.contatcts)
  const { criterio } = useSelector((state: RootReducer) => state.filtro)

  const filtrarContatos = () => {
    let contatosFiltrados = contatos
    if (criterio === 'favorito') {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.favorito === true
      )
      return contatosFiltrados
    }
    return contatos
  }

  const tarefas = filtrarContatos()

  return (
    <div>
      <ul>
        {tarefas.map((t) => (
          <li key={t.name}>
            <Contato
              id={t.id}
              name={t.name}
              phone={t.phone}
              email={t.email}
              favorito={t.favorito}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListaAZ
