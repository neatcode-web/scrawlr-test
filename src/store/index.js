import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            upvote: {
                selected: false,
            },
            color: 'primary',
            numOfUpvote: 1
        }
    },
    getters: {},
    mutations: {
        UPDATE_UPVOTE(state) {
            let color = "primary"
            if(!state.upvote.selected) {
                color = "blue";
            }
            state.upvote = {...state.upvote, selected: !state.upvote.selected}
            state.color = color;
        },
        ADD_UPVOTE(state) {
            state.numOfUpvote = state.numOfUpvote + 1;
        },
    },
});

export default store;