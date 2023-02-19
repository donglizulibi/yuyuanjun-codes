let data = {
    threeState: {
        state: true,
        children: {
            baseState: {
                state: false,
                children: {
                    directState: { state: false },
                    countDemoState: { state: false },
                    preventDefaultState: { state: false },
                    watchComputedState: { state: false },
                    classStyleState: { state: false },
                    fForIfState: { state: false },
                    gInputComponentState: { state: false },
                    hEventComponentState: { state: false },
                }
            },
            bVueComponentState: {
                state: true,
                children: {
                    bBasePropsState: { state: false },
                    aGlobalComponentState: { state: false },
                    cButtonComponentState: { state: false },
                    dEventCompoentState: { state: true },
                }
            },
        }
    },
    piniaState: {
        state: false
    },
    routerState: {
        state: false
    }
}

export default data