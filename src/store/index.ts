import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from './reducers/contactsReducer'
import filterReducer from './reducers/filterReducer'

const store = configureStore({
  reducer: {
    contatcts: contactsReducer,
    filtro: filterReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
