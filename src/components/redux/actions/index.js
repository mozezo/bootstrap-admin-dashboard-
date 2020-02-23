import { CARDS } from '../constants/index';

const loadCards = () => ({
    type: CARDS.LOAD
});

const getCards = cards => ({
    type: CARDS.LOAD_SUCCESS,
    cards
});

const getErrorCards = error => ({
    type: CARDS.LOAD_FAIL,
    error
});





export { loadCards , getCards, getErrorCards };