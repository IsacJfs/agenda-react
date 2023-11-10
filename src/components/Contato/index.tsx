import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './style'
import {
  removeContacts,
  editContacts,
  changeStatus
} from '../../store/reducers/contactsReducer'
import { Contact } from '../../models/contact'
import { Botao, BotaoSalvar } from '../../styles'
import { ReactComponent as IconeCheckbox } from '../icons/star-fill.svg'
import { ReactComponent as IconeCheckboxFill } from '../icons/star.svg'
import { ReactComponent as IconeMenu } from '../icons/list.svg'
import { ReactComponent as IconeClose } from '../icons/x.svg'

type Props = Contact

const Contato = ({
  name: namePrime,
  phone: phonePrime,
  email: emailPrime,
  favorito,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [submenu, setSubmenu] = useState(false)

  useEffect(() => {
    if (namePrime.length > 0) {
      setName(namePrime)
      setPhone(phonePrime)
      setEmail(emailPrime)
    }
  }, [namePrime, emailPrime, phonePrime])

  function cancelarEdicao() {
    setEstaEditando(false)
    setName(namePrime)
    setPhone(phonePrime)
    setEmail(emailPrime)
  }

  function alteraStatusContato(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(
      changeStatus({
        id,
        favorito: evento.target.checked
      })
    )
  }

  return (
    <div>
      <S.Card $favorito={favorito}>
        <div>
          <S.CampoName
            disabled={!estaEditando}
            value={name}
            onChange={(evento) => setName(evento.target.value)}
          />
          <S.Campos
            disabled={!estaEditando}
            value={phone}
            onChange={(evento) => setPhone(evento.target.value)}
          />

          <S.Campos
            disabled={!estaEditando}
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
          />
          <S.BarraAcoes>
            {submenu && (
              <div>
                {estaEditando ? (
                  <>
                    <BotaoSalvar
                      onClick={() => {
                        dispatch(
                          editContacts({
                            id,
                            email,
                            favorito,
                            name,
                            phone
                          })
                        )
                        setEstaEditando(false)
                      }}
                    >
                      Salvar
                    </BotaoSalvar>
                    <S.BotaoCancelarRemover onClick={cancelarEdicao}>
                      Cancelar
                    </S.BotaoCancelarRemover>
                  </>
                ) : (
                  <>
                    <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
                    <S.BotaoCancelarRemover
                      onClick={() => dispatch(removeContacts(id))}
                    >
                      Remover
                    </S.BotaoCancelarRemover>
                  </>
                )}
              </div>
            )}
          </S.BarraAcoes>
        </div>
        <S.SubMenu>
          <S.CheckboxContainer>
            <S.HiddenCheckbox
              onChange={alteraStatusContato}
              checked={favorito}
              type="checkbox"
              id={id}
            />
            <div>{favorito ? <IconeCheckbox /> : <IconeCheckboxFill />}</div>
          </S.CheckboxContainer>
          <div onClick={() => setSubmenu(!submenu)}>
            <div>{submenu ? <IconeClose /> : <IconeMenu />}</div>
          </div>
        </S.SubMenu>
      </S.Card>
    </div>
  )
}

export default Contato
