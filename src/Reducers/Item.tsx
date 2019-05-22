import {Item} from "../CommmonInterface/commonInterface";
import {ADD_NEW_ITEM, DISPLAY_ALL_ITEMS, DISPLAY_ITEMS_BY_ID} from "../ActionTypes/ActionTypes";

interface ItemReducer {
    itemList: Item[],
    selectedItem: Item
}

export default function ItemReducer (state:ItemReducer,action:any) {
    switch (action.type) {
        case DISPLAY_ALL_ITEMS:
            return {...state};
        case ADD_NEW_ITEM:
            let itemList = [...state.itemList];
            itemList.push(action.payload);
            return {...state,itemList};
        case DISPLAY_ITEMS_BY_ID:
            const selectedItem = state.itemList.find((item:Item)=> item.id === action.payload );
            return {...state,selectedItem};
    }
}