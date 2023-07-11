import { createSlice } from '@reduxjs/toolkit'

const signUp = createSlice({
  name: 'signUp',
  initialState: {
    phone: '',
    username: '',
    password: '',
    code: ''
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

const { save } = signUp.actions
const reducer = signUp.reducer

export { save }
export default reducer
