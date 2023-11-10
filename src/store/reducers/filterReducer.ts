import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type FilterState = {
  filter?: string
  criterio: 'favorito' | 'normal' | 'todos'
}

const initialState: FilterState = {
  filter: '',
  criterio: 'normal'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload
    },
    changeFilter: (state, action: PayloadAction<FilterState>) => {
      state.criterio = action.payload.criterio
    }
  }
})

export const { setFilter, changeFilter } = filterSlice.actions
export default filterSlice.reducer
