import { createSlice } from '@reduxjs/toolkit'

const login = createSlice({
  name: 'login',
  initialState: {
    username: '',
    password: '',
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

const { save } = login.actions
const reducer = login.reducer

export { save }
export default reducer
