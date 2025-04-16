import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Grocery } from "src/app/types/types.model";

export const selectGroceries = createFeatureSelector<Grocery[]>('groceries');

export const selectFilteredGroceries = (type: string) => createSelector(
  selectGroceries,
  groceries => type === 'All' ? groceries : groceries.filter(item => item.type === type)
);