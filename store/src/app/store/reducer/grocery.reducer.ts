import { createReducer, on } from "@ngrx/store";
import { Grocery } from "../../types/types.model";
import { groceriesAction } from "../action/grocery.action";

const initialData: Grocery[] = [];

export const groceryReducer = createReducer(
  initialData,
  on(groceriesAction, (state, {payload})=>{
    return [
      ...state, 
      ...payload
    ]
  })
)