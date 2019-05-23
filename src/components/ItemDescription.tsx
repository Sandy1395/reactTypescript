import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'
import { Input, Button, Form } from 'antd';
import { Item } from '../CommmonInterface/commonInterface';
import { editItem } from '../Actions/item';


interface ItemListProps {
    itemList?: Item[],
    match: any,
    editItem: any,
    history: any
}

interface ItemListState {
    details: any,
    err: boolean,
    message: string
}

const { TextArea } = Input;

class ItemDescription extends React.Component<ItemListProps,ItemListState> {

    state = {
        details: {
            title: '',
            date: new Date(),
            desc: ''
        },
        err: false,
        message: ''
    };

    componentWillMount() {
        //@ts-ignore
        const item = this.props.items.find((i: any) => i.id === parseInt(this.props.match.params.id));
        if(item && item.id) {
            this.setState({details: item });            
        } else {
            this.setState({ err: true, message: 'Invalid Request' })
        }
    }

    handleChange = (event: any) => {
        const name: string = event.target.name;
        const value: string = event.target.value;
      this.setState(state => ({
          details: {
              ...state.details,
              [name]: value
          }}))
    };

    handleSave = () => {
        const { id } = this.props.match.params;
        const { details: { title, desc } } = this.state;
        this.props.editItem({
            id,
            title,
            desc
        })
        this.props.history.push('/')
    }

    render() {
        const { details, err, message } = this.state;
         return (
            <div className="item-desc-container">
                <div className="items-div">
                {
                    err
                    ?
                        (
                           <h1 style={{ color: 'red' }}>{message}</h1>
                        )
                    :
                        (
                        <React.Fragment>
                            <h1>Edit Item</h1>
                            <Form className="login-form">
                                <Form.Item>                
                                    <Input placeholder="Enter item" onChange={this.handleChange} name="title" value={details.title}/>
                                </Form.Item>
                                <Form.Item>
                                    <TextArea placeholder="Enter description" onChange={this.handleChange} name="desc" value={details.desc}/>   
                                </Form.Item>
                                <Form.Item>
                                    <Button name="desc" onClick={this.handleSave} type="primary">Save</Button>   
                                </Form.Item>
                            </Form>
                        </React.Fragment>
                        )

                }
               
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

  const mapDispatchToProps = (dispatch: any) => {
    return {
        editItem: bindActionCreators(editItem, dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ItemDescription as any));