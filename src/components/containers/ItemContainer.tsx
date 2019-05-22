import React, {FC, useReducer, useCallback} from 'react'
import {ListProvider} from '../../contexts/listContexts';
import {AddItem as AddItemAction, listReducer, AddItemPayload, defaultState} from '../../reducers/listReducers'


export const ItemContainer: FC = ({children}) => {
    const [state, dispatch] = useReducer(listReducer,
        //@ts-ignore
        {items: defaultState.items}
    );

    const addItem = useCallback((item: AddItemPayload) => {
        dispatch(AddItemAction(item))
    }, [])

    return (
        <ListProvider value={{...state, addItem}}>
            {children}
        </ListProvider>
    )
}
