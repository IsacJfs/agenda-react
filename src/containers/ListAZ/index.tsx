import Contato from '../../components/Contato'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaAZ = () => {
  const { contatos } = useSelector((state: RootReducer) => state.contatcts)
  const { criterio } = useSelector((state: RootReducer) => state.filtro)

  const formatarTelefone = (telefone: string) => {
    // Verifica se o telefone tem 10 ou 11 dígitos (com ou sem o dígito 9 no início)
    const match = telefone.match(/^(\d{2})(\d{4,5})(\d{4})$/)
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`
    }
    return telefone // Retorna o telefone não formatado se não corresponder ao padrão
  }

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
              phone={formatarTelefone(t.phone)}
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
