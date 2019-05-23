import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment'
import { withRouter } from 'react-router-dom'
import { Table, Button } from 'antd';
import { Item } from '../CommmonInterface/commonInterface';
import AddNewItemForm from './AddNewItemForm';
import './style.css';

interface ItemListProps {
    itemList?: Item[],
    history: any
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

    onChange = (pagination: any, filters: any, sorter: any) => {
        console.log('params', pagination, filters, sorter);
    }  
    
    redirectToItem = (text: any) => {
        const id = text.target.innerText;
        this.props.history.push(`/item/${id}`)
        
    }

    render() {
        //@ts-ignore
        let { items } = this.props;
        const {addNew} = this.state;

        items = items && items.map((item: any) => ({
            ...item,
            key: item.id
        }))   
        const columns: any = [
            {
                title: 'ID',
                dataIndex: 'id',
                sortDirections: ['ascend','descend'],
                sorter: (a: any, b: any) => a.title.length - b.title.length,
                render: (text: any) => <Button type="link" size="small" onClick={e => this.redirectToItem(e)}>{text}</Button>
            },
            {
                title: 'Title',
                dataIndex: 'title',
                sortDirections: ['ascend','descend'],
                sorter: (a: any, b: any) => a.title.length - b.title.length,
            },
            {
                title: 'Date',
                dataIndex: 'date',
                sortDirections: ['ascend','descend'],
                render: (d: any) => (
                    <span>{moment(d).format('L')}
                    </span>
                  ),
                sorter: (a: any, b: any) => a.date.length - b.date.length,
            },
            {
                title: 'Description',
                dataIndex: 'desc',
                sortDirections: ['ascend','descend'],
                sorter: (a: any, b: any) => a.desc.length - b.desc.length,
            }
          ]; 
         return (
            <div className="list-container">
                <div className="list-div">
                <button onClick={this.openAddNewForm}> Add new Item </button>
                <Table columns={columns} dataSource={items} onChange={this.onChange} />
                { addNew && <AddNewItemForm visible={addNew} handleClose={this.openAddNewForm} /> }
                </div>
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

export default connect(mapStateToProps, null)(withRouter(ItemList  as any));