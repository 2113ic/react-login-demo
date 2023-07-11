import { createSlice } from '@reduxjs/toolkit'

const reset = createSlice({
  name: 'reset',
  initialState: {
    phone: '',
    password: '',
    code: '',
  },
  reducers: {
    save(state, action) {
      for (let [key, value] of Object.entries(action.payload)) {
        state[key] = value
      }

      localStorage.setItem('loginData', JSON.stringify(action.payload))
    },
  },
})

const { save } = reset.actions
const reducer = reset.reducer

export { save }
export default reducer
