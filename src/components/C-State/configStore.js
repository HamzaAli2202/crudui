import {
    createStore,
    combineReducers
} from "redux"
import {
    produtReducer
} from "./Reducer/productReducer"
import {
    cartReducer
} from "./Reducer/cartReducer"

export const configStore = () => {
    const store = createStore(
        combineReducers({
            cartReducer,
            produtReducer
        }),

        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    )
    return store
}