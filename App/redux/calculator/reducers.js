import actions from "./actions"

const initState = {
    count: 0
}

export default function taxesReducer(state = initState, action) {
    switch(action.type){
        case actions.INCREMENT: {
            return {
                ...state,
                count : state.count + 1
            }
        }
        case actions.DECREMENT: {
            return {
                ...state,
                count : state.count - 1
            }
        }
        case actions.RESET: {
            return {
                ...state,
                count : 0
            }
        }

        default: {
            return state
        }
    }
}