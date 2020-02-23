import { put, call, takeEvery, select } from 'redux-saga/effects';

import { getCards, getErrorCards } from '../actions';
import { CARDS } from '../constants';
import { fetchCards } from '../api';


export function* handleCardsLoad() {
    try {
        const cards = yield call(fetchCards);
        yield put(getCards(cards));
    } catch (error) {
        yield put(getErrorCards(error.toString()));
    }
}

export default function* watchCardsLoad() {
    yield takeEvery(CARDS.LOAD, handleCardsLoad);
}