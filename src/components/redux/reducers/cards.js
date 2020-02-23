import { CARDS } from '../constants';

const initialState = {
    isLoading: false,
    cards: [],
    error: null
};

const CardReducer = (state = initialState , action) => {

    switch(action.type){
        case CARDS.LOAD:
            return {...state , isLoading: true };
        case CARDS.LOAD_SUCCESS:
            return {...state, cards: action.cards, isLoading: false};
        case CARDS.LOAD_FAIL:
            return {...state, error: action.error, isLoading: false}
        default:
            return state;
    }
}

export default CardReducer;