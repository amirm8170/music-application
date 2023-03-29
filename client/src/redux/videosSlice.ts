import { createSlice , PayloadAction } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name:'videos',
    initialState:{
        videos:[]
    },
    reducers:{
        setVideos:(state , action:PayloadAction<any>)=>{
            state.videos = action.payload
        }
    }
})


export const { setVideos } = videoSlice.actions
export default videoSlice.reducer