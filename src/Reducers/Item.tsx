import {Item} from "../CommmonInterface/commonInterface";
import {ADD_NEW_ITEM, DISPLAY_ALL_ITEMS, DISPLAY_ITEMS_BY_ID, EDIT_ITEM} from "../ActionTypes/ActionTypes";

interface ItemReducer {
    itemList: Item[],
    selectedItem?: Item
}

let initialState = {
    itemList: [{ id:1, title: 'Item1', date: new Date(), desc: 'This is Item1' }]
};

export default function ItemReducer (state:ItemReducer=initialState,action:any) {
    switch (action.type) {
        case DISPLAY_ALL_ITEMS:
            return {...state};
        case ADD_NEW_ITEM:
            let itemList = [...state.itemList];
            itemList.push(action.payload);
            console.log('itemList', itemList);
            return {...state,itemList};
        case DISPLAY_ITEMS_BY_ID:
            const selectedItem = state.itemList.find((item:Item)=> item.id === action.payload );
            return {...state,selectedItem};
        case EDIT_ITEM:
            const item: any = state.itemList.find(o => o.id === Number(action.payload.id))
            const index = state.itemList.findIndex(o => o.id === Number(action.payload.id))
            item.title = action.payload.title;
            item.desc = action.payload.desc
            state.itemList[index] = item
            return {...state}
        default:
            return {...state};
    }
}