import React from 'react';
import {ListContext} from '../../contexts/listContexts';
import AddModal from "../ItemList/AddModal";
import ItemTable from "./ItemTable";

const ItemList: React.FC = () => {
    return (
        <ListContext.Consumer>
            {value => (
                <div>
                    <AddModal addItem={(item) => value.addItem(item)} total={value.items.length}/>
                    <ItemTable items={value.items}/>
                </div>
            )}
        </ListContext.Consumer>
    );
}

export default ItemList;
