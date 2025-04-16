import { createAction, props } from "@ngrx/store";
import { Grocery } from "src/app/types/types.model";



export const groceriesAction = createAction(
  '[Grocery] Add',
  props<{payload: Grocery[]}>()
)