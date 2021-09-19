import { createAction, props } from "@ngrx/store";

export const credit = createAction("credit");

export const addCredit = createAction("addCredit", props<{name:string,type1:string}>());