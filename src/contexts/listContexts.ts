import { createContext } from 'react';
import { defaultState, AddItemPayload } from  '../reducers/listReducers';

export interface ListContextState {
    items: Array<AddItemPayload>,
    addItem: (item: AddItemPayload) => void
}

export const ListContext = createContext<ListContextState>({ items: defaultState.items, addItem: (item: AddItemPayload) => {}});
export const ListProvider = ListContext.Provider;