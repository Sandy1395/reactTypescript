import React from 'react';
import { Item } from '../CommmonInterface/commonInterface'

interface ItemListProps {
    itemList?: Item[]
}

interface ItemListState {
    addNew: boolean
}

class ItemList extends React.Component<ItemListProps,ItemListState> {

    state = {
        addNew: false
    };

    openAddNewForm = () => {
      this.setState({addNew:true});
    };

    render() {
        const {itemList} = this.props;
        const {addNew} = this.state;
         return (
            <div>
                <button onClick={this.openAddNewForm}> Add new Item </button>
            </div>
        )

    }
}

export default ItemList;