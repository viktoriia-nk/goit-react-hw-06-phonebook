import {addContact, deleteContact, getSearchingContacts} from './actions';
import { combineReducers, createReducer } from '@reduxjs/toolkit';


const items = createReducer([], {
    [addContact]: (state, {payload}) =>  [...state, payload ],
    [deleteContact]: (state, {payload}) => [...state.filter(({ id }) => id !== payload)]
})

const filter = createReducer('', {
    [getSearchingContacts]: (_, {payload}) => payload
})

const reduser = combineReducers({items, filter})


export default reduser