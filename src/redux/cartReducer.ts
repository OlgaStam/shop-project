import { AnyAction } from '@reduxjs/toolkit'
import { omit } from 'lodash'

type CartStateType = { [id: number]: number }

const initialStat: CartStateType = {
    1: 5,
    2: 5,
}
const cartReducer = (state = initialStat, action: AnyAction) => {
    switch (action.type) {
        case 'add-product-to-cart':
            return {
                ...state,
                [action.id]: (state[action.id] || 0) + action.count,
            }
            case "remove-product-from-cart":{
                return omit(state, action.id)
            }
            default:
              return state
    }
}
export default cartReducer
