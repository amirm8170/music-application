import { createSlice , PayloadAction } from "@reduxjs/toolkit";

const myMusicSlice = createSlice({
    name:'myMusic',
    initialState:{
        myMusic:[],
        likedMusic:[]
    },
    reducers:{
        setMyMusic:(state , action:PayloadAction<any>)=>{
            state.myMusic = action.payload
        },
        setLikedMusic:(state , action:PayloadAction<any>)=>{
            state.likedMusic = action.payload
        }
    }
})

export const {setMyMusic , setLikedMusic} = myMusicSlice.actions
export default myMusicSlice.reducer