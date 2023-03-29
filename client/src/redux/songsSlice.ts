import { createSlice , PayloadAction } from "@reduxjs/toolkit";

const songsSlice = createSlice({
    name:'songs',
    initialState:{
        songs:[]
    },
    reducers:{
        setSongs: (state , action:PayloadAction<any>)=>{
            state.songs = action.payload
        }
    }
})

export const {setSongs} = songsSlice.actions

export default songsSlice.reducer