import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    user:null,
    isLogin:false
  }
  export const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.user=action.payload,
            state.isLogin=true
        },
        logout:(state)=>{
            state.user=null,
            state.isLogin=false
        }
    }
})
export const { login, logout } = userSlice.actions
export default userSlice.reducer