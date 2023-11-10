import React, { useState } from 'react'
import { addContact } from '../../store/reducers/contactsReducer'
import { useDispatch } from 'react-redux'
import { Contact } from '../../models/contact'
import Avatar from '../../components/avatar'
import * as S from './style'
import Menu from '../Menu'

const Sidebar: React.FC = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [favorito, setFavorito] = useState(false)

  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newContact: Contact = {
      id: Date.now().toString(),
      name,
      phone,
      email,
      favorito
    }
    dispatch(addContact(newContact))
    setName('')
    setPhone('')
    setEmail('')
    setFavorito(false)
  }

  return (
    <>
      <S.SideB>
        <S.ContainerAvatar>
          <Avatar />
        </S.ContainerAvatar>
        <S.Container>
          <Menu />
          <S.Form onSubmit={handleSubmit}>
            <S.ImputName
              type="text"
              placeholder="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <S.ImputFone
              type="text"
              placeholder="Telefone: (__) _____-____"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <S.ImputEmail
              type="email"
              placeholder="-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <S.ButtonContact type="submit">Adicionar contato</S.ButtonContact>
          </S.Form>
        </S.Container>
      </S.SideB>
    </>
  )
}

export default Sidebar
