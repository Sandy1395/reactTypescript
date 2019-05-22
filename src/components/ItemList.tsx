import React from 'react';
import {connect} from 'react-redux';
import { Table } from 'antd';
import { Item } from '../CommmonInterface/commonInterface';
import AddNewItemForm from './AddNewItemForm';

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
      this.setState((state) => ({addNew:!state.addNew}));
    };

    render() {
        //@ts-ignore
        let { items } = this.props;
        const {addNew} = this.state;

        items = items && items.map((item: any) => ({
            ...item,
            key: item.id
        }))   
        const columns = [
            {
                title: 'Title',
                dataIndex: 'title',
            },
            {
                title: 'Date',
                dataIndex: 'date',
                render: (d: any) => (
                    <span>{d.toDateString()}
                    </span>
                  ),
            },
            {
                title: 'Description',
                dataIndex: 'desc',
            }
          ]; 
         return (
            <div>
                <button onClick={this.openAddNewForm}> Add new Item </button>
                <Table columns={columns} dataSource={items} />
                { addNew && <AddNewItemForm visible={addNew} handleClose={this.openAddNewForm} /> }
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    console.log('ites', state.ItemReducer.itemList);
    return {
        items: state.ItemReducer.itemList
    }
  }

export default connect(mapStateToProps, null)(ItemList);