import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';


export const addContact = createAction('contacts/add', contact => ({
    payload:{
        id: nanoid(),
        name: contact.name,
        number: contact.number,
    }
}))

export const deleteContact= createAction('contacts/delete')

export const getSearchingContacts = createAction('contacts/filter')