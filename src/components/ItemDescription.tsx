import React from 'react';
import {connect} from 'react-redux';
import { Table } from 'antd';
import { Item } from '../CommmonInterface/commonInterface';
import AddNewItemForm from './AddNewItemForm';

interface ItemListProps {
    itemList?: Item[]
}

interface ItemListState {
    details: any
}

class ItemDescription extends React.Component<ItemListProps,ItemListState> {

    state = {
        details: {
            title: '',
            date: new Date(),
            desc: ''
        }
    };

    componentWillMount() {
        //@ts-ignore
        const item = this.props.items.find((i: any) => i.id === parseInt(this.props.match.params.id));
        this.setState({details: item });
    }

    render() {
        const { details } = this.state;
         return (
            <div>
                <div>
                    title: {details.title}
                    desc: { details.desc}
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

export default connect(mapStateToProps, null)(ItemDescription);