export const produtReducer = (state = {
    prod: [],

}, action) => {

    switch (action.type) {
        case "ADD_PROD":
            return {
                prod: [...state.prod, action.payload]
            }

    }
    return state
}