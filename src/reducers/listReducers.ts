import { ActionWithPayload } from './actionTypings'

export enum ActionType {
    ADD_ITEM = 'ADD_ITEM',
}

export type Actions = AddItemAction

export interface AddItemPayload {
    id: number,
    title: string,
    date: Date,
    description: string
}

export type AddItemAction = ActionWithPayload<ActionType.ADD_ITEM, AddItemPayload>

export const AddItem = (item: AddItemPayload): AddItemAction => ({
    type: ActionType.ADD_ITEM,
    payload: item
});


export const defaultState = {
    items: [ { id: 1, title: "Item 1", date: new Date(), description: "Item 1 Description"},
        { id: 2, title: "Item 2", date: new Date(), description: "Item 2 Description"}]
}


export const listReducer = (state = defaultState, action: Actions ) => {
    switch (action.type) {
        case ActionType.ADD_ITEM:
            return { ...state, items: [...state.items, action.payload]}
        default:
            return state
    }
}