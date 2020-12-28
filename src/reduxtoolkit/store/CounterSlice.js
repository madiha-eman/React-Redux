import {createSlice} from '@reduxjs/toolkit'

export const CounterSlice = createSlice({

    name: 'counter',
    initialState: 0,
    reducers:{
        incrementAction: state => state +1,
        decrementAction: state => state -1,
        doubleAction: state => state+2,
    }
});

export const {incrementAction, decrementAction, doubleAction} =CounterSlice.actions;
const reducer = CounterSlice.reducer


export default reducer



