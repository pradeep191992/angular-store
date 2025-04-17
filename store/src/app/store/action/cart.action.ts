import { createAction, props } from "@ngrx/store";
import { CartModel, Grocery } from "src/app/types/types.model";


export const cartAction = createAction(
  '[Cart] Add',
  props<{payload: CartModel}>()
)