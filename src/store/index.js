import { configureStore } from '@reduxjs/toolkit'
import login from './modules/login'
import signUp from './modules/signUp'
import reset from './modules/reset'

export default configureStore({
  reducer: {
    login,
    signUp,
    reset,
  },
})
