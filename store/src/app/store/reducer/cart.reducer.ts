import { createReducer, on } from "@ngrx/store";
import { CartModel, Grocery } from "src/app/types/types.model";
import { cartAction } from "../action/cart.action";



const cartInitial: CartModel[] = [];

export const cartReducer = createReducer(
  cartInitial,
  on(cartAction, (state, action) => {
    const isValExist = state.find(val => val.filename === action.payload.filename);
  
    if (isValExist) {
      return state.map(item => {
        return item.filename === action.payload.filename
          ? { 
            ...item, 
            quantity: item.quantity + 1,
            // price: item.price * (item.quantity + 1)
          }
          : item;
      });
    } else {
      return [
        ...state,
        {
          ...action.payload,
          quantity: 1
        }
      ];
    }
  })
)