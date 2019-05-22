import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {Item} from "../CommmonInterface/commonInterface";
import { Modal, Input, DatePicker  } from 'antd';
import { addNewItem } from '../Actions/item';

interface AddNewItemFormProps {
    onSubmit(item: Item): void
}

class AddNewItemForm extends React.Component<any,Item>{

    constructor (props: any) {
        super (props);
        this.state = {
            title: '',
            date: new Date(),
            desc: ''
        }
    }

    onChange = (event: any) => {
      this.setState({[event.target.name]: event.target.value});
    };

    handleOk = () => {
        this.props.addItem({...this.state, date: this.state.date, id: this.props.items.length+1});
        this.setState({ title: '', date: new Date(), desc: ''});
        this.props.handleClose();
    }

    handleCancel = () => {
        this.props.handleClose();
    }

    handleDateChange = (value: any) => {
        this.setState({date: value});
    }

    render () {
        const {title, date, desc} = this.state;
        return (
            <Modal
                title="Add Item"
                visible={this.props.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                <Input onChange={this.onChange} name="title" value={title}/>
                <DatePicker onChange={this.handleDateChange} />
                <Input onChange={this.onChange} name="desc" value={desc}/>   
            </Modal>
        )
    }

}

const mapStateToProps = (state: any) => {
    return {
        items: state.ItemReducer.itemList
    }
  }

const mapDispatchToProps = (dispatch: any) => {
    return {
      addItem: bindActionCreators(addNewItem, dispatch)
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(AddNewItemForm);