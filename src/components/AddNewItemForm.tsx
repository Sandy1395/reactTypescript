import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {Item} from "../CommmonInterface/commonInterface";
import { Modal, Input, DatePicker, Form } from 'antd';
import { addNewItem } from '../Actions/item';

const { TextArea } = Input;

interface AddNewItemFormProps {
    onSubmit(item: Item): void,
    visible: boolean,
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

    handleChange = (event: any) => {
        const name: string = event.target.name;
        const value: string = event.target.value;
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
            <Form className="login-form">
                <Form.Item>                
                    <Input placeholder="Enter item" onChange={this.handleChange} name="title" value={title}/>
                </Form.Item>
                <Form.Item>
                    <DatePicker placeholder="select date" onChange={e => this.handleDateChange} />
                </Form.Item>
                <Form.Item>
                    <TextArea placeholder="Enter description" onChange={this.handleChange} name="desc" value={desc}/>   
                </Form.Item>
                </Form>
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