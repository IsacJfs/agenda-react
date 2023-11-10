import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import { Contact } from '../../models/contact'
import { RootState } from '../../models/contact'

type ContactState = {
  contatos: Contact[]
}

const initialState: ContactState = {
  contatos: [
    {
      id: '1',
      favorito: true,
      name: 'primeiro nome',
      phone: '61993458310',
      email: 'email@email.com'
    },
    {
      id: '2',
      favorito: true,
      name: 'Segundo nome',
      phone: '61993458310',
      email: 'email@email.com'
    },
    {
      id: '3',
      favorito: false,
      name: 'Terceiro nome',
      phone: '61993458310',
      email: 'email@email.com'
    },
    {
      id: '4',
      favorito: false,
      name: 'Quarto nome',
      phone: '61993458310',
      email: 'email@email.com'
    },
    {
      id: '5',
      favorito: false,
      name: 'Quinto nome',
      phone: '61993458310',
      email: 'email@email.com'
    },
    {
      id: '6',
      favorito: true,
      name: 'Sexto nome',
      phone: '61993458310',
      email: 'email@email.com'
    }
  ]
}

// Selector to get the filter state from the filterReducer
const selectFilter = (state: RootState) => state.contacts.filter

// Selector to get contacts
const selectContacts = (state: RootState) => state.contacts.contacts

// Selector to get filtered contacts based on the name
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) {
      return contacts
    }
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
  }
)

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    removeContacts: (state, action: PayloadAction<string>) => {
      state.contatos = [
        ...state.contatos.filter((contato) => contato.id !== action.payload)
      ]
    },
    editContacts: (state, action: PayloadAction<Contact>) => {
      const indexDoContato = state.contatos.findIndex(
        (valor) => valor.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.contatos[indexDoContato] = action.payload
      }
    },
    addContact: (state, action: PayloadAction<Contact>) => {
      const checkContact = state.contatos.find(
        (nome) => nome.name.toLowerCase() === action.payload.name.toLowerCase()
      )
      if (checkContact) {
        alert('Esse contato já está cadastrado')
      } else {
        state.contatos.push(action.payload)
      }
    },
    filtraContact: (state, action: PayloadAction<Contact>) => {
      const checkContact = state.contatos.find(
        (nome) => nome.name.toLowerCase() === action.payload.name.toLowerCase()
      )
      if (checkContact) {
        state.contatos.find((nome) => nome.name.toLowerCase())
      }
    },
    changeStatus: (
      state,
      action: PayloadAction<{ id: string; favorito: boolean }>
    ) => {
      const indexDoContato = state.contatos.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.contatos[indexDoContato].favorito = action.payload.favorito
          ? true
          : false
      }
    }
  }
})

export const {
  removeContacts,
  changeStatus,
  editContacts,
  addContact,
  filtraContact
} = contactsSlice.actions

export default contactsSlice.reducer
