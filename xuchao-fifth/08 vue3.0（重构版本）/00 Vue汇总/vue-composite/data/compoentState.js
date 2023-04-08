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
                state: false,
                children: {
                    bBasePropsState: { state: false },
                    aGlobalComponentState: { state: false },
                    cButtonComponentState: { state: false },
                    dEventCompoentState: { state: false },
                    eVmodelComponentState: { state: false }
                }
            },
            cVueSlotComponentState: {
                state: true
            },
            dVueProvideInjectState: {
                state: false
            },
            eVueLifeCycleState: {
                state: false
            },
            fVueCompositionApiState: {
                state: false
            },
            gCompositionApiScriptSetupState: {
                state: false
            }
        }
    },
    piniaState: {
        state: true,
        children: {
            piniaBaseState: {
                state: false
            },
            actionGettersState: {
                state: false
            },
            showCartState: {
                state: false
            }
        }
    }
}

export default data