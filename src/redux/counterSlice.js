import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {data:[
    {
      product_name: "Anythy Medicine",
      product_description: "Lower Gypsem text any text  Lower Gypsem text any text Lower Gypsem text any text Lower Gypsem text any text Lower Gypsem text any text Lower Gypsem text any text",
      product_quantity: 1,
      product_price: 100
    },
    {
      product_name: "Other Medicine ",
      product_description: "Lower Gypsem text any text  Lower Gypsem text any text Lower Gypsem text any text Lower Gypsem text any text Lower Gypsem text any text Lower Gypsem text any text",
      product_quantity: 2,
      product_price: 264
    }
  ]},
  reducers: {
    addToCart: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      let nstate = state;
      nstate.data.push(action.payload);
      return nstate;
    },
    removeFromCart: (state,action) => {
      let dataf =  state.data.filter(value=>value.product_name !== action.payload.product_name);
      let nstate = {};
      nstate.data = dataf;
      return nstate;
    },
    incrementQunatityCart: (state, action) => {
      let dataf =  state.data.filter(value=>value.product_name !== action.payload.product_name);
      // console.log(action);
      dataf.push(action.payload);
      let nstate = {};
      nstate.data = dataf;
      return nstate;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, incrementQunatityCart } = CartSlice.actions

export default CartSlice.reducer