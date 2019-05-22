import * as type from '../ActionTypes/ActionTypes';
import {Item} from "../CommmonInterface/commonInterface";

export function displayAllItems () {
   return {
       type: type.DISPLAY_ALL_ITEMS
   }
}

export function displayItemById (id: number) {
    return {
        type: type.DISPLAY_ITEMS_BY_ID,
        payload: id
    }
}

export function addNewItem(item: Item) {
    return {
        type: type.ADD_NEW_ITEM,
        payload: item
    }
}