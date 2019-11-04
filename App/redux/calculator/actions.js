
const actions = {
    INCREMENT: '@calculator/INCREMENT',
    DECREMENT: '@calculator/DECREMENT',
    RESET: '@calculator/RESET',
    incrementCount: () => ({
        type: actions.INCREMENT
    }),

    decrementCount: () => ({
        type: actions.DECREMENT
    }),

    resetCount: () => ({
        type: actions.RESET
    })

}

export default actions
