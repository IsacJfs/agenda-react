// uso de interface pode ser mais eficiente do que Class
export interface Contact {
  id: string
  name: string
  phone: string
  email: string
  favorito: boolean
}

interface ContactsState {
  contacts: Contact[]
  filterList: Contact[]
  filter: string
}

export interface RootState {
  contacts: ContactsState
}
