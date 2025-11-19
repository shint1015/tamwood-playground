import { createStore } from 'vuex';

export default createStore({
    state: {
        easyGlobalState: { easyCompleted: false, uniqueCharsCount: 0 },
        mediumGlobalState: { factorCount: 0, factorChecked: false },
    },
    mutations: {
        setEasyCompleted(state, status) {
            state.easyGlobalState.easyCompleted = status;
        },
        setUniqueCharsCount(state, count) {
            state.easyGlobalState.uniqueCharsCount = count;
        },
        setFactorCount(state, count) {
            state.mediumGlobalState.factorCount = count;
        },
        setFactorChecked(state, status) {
            state.mediumGlobalState.factorChecked = status;
        },
    },
});
