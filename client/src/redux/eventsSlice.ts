import { createSlice , PayloadAction } from "@reduxjs/toolkit";


const eventsSlice = createSlice({
    name:'events',
    initialState:{
        events:[]
    },
    reducers:{
        setEvents:(state , action:PayloadAction<any>)=>{
            state.events = action.payload
        }
    }
})

export const {setEvents} = eventsSlice.actions
export default eventsSlice.reducer