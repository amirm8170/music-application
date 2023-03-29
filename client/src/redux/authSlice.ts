import {createSlice , PayloadAction} from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name:'auth',
    initialState:{
        auth:'',
        id:''
    },
    reducers:{
        setAuth:(state , action:PayloadAction<string>)=>{
            state.auth = action.payload
        },
        setId:(state , action:PayloadAction<string>)=>{
            state.id = action.payload
        }
    }
})


export const {setAuth , setId} = authSlice.actions
export default authSlice.reducer
