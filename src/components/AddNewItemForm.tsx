import React from 'react';
import {Item} from "../CommmonInterface/commonInterface";
import { Input, Button } from 'antd';

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

    onSubmit = ()=> {
        this.props.onSubmit(this.state);
    };

    render () {
        const {title,desc} = this.state;
        return (
            <div>
                <Input name="title" value={title} onChange={this.onChange}/>
                <Input name="desc" value={desc} onChange={this.onChange}/>
                <Button type="primary">Add</Button>
            </div>
        )
    }

}

export default AddNewItemForm;