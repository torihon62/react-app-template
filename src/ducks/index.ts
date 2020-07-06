import { appReducer } from './app/reducer';
import { combineReducers } from 'redux';

export const reducers = combineReducers({
	appUI: appReducer,
});
