import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cartItem',
    initialState : {
        cartItem : []
    },
    reducers : {
        addItem: (state, action) => {
            state.cartItem.push(action.payload.item)
        }
    }
})


export const {addItem} = cartSlice.actions
export default cartSlice.reducer