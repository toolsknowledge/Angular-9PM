import { accountsReducer } from "./accounts/accounts.reducer";
import { creditReducer } from "./credit/credit.reducer";

export const appReducer = {
    accounts:accountsReducer,
    credit:creditReducer
}