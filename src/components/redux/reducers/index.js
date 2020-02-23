import CardReducer from './cards';

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    cards: CardReducer,
});

export default rootReducer;