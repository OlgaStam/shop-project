import { AnyAction } from "@reduxjs/toolkit"

type CartStateType = { [id: number]: number }

const initialStat: CartStateType = {
  1:5, 2:5
}
const cartReducer= (state= initialStat, action : AnyAction) => state
export default cartReducer