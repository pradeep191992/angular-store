import { createAction, props } from "@ngrx/store";
import { Grocery } from "src/app/types/types.model";


export const cartAction = createAction(
  '[Cart] Add',
  props<{payload: Grocery}>()
)