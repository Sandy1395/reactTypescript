import React, {useState} from 'react';
import {Button, Header, Icon, Modal, Form} from 'semantic-ui-react'
import {AddItemPayload} from '../../reducers/listReducers';

interface IProps {
    addItem: (item: AddItemPayload) => void,
    total: number
}

interface IEvent {
    target: {
        name: string,
        value: any
    }
}

const AddModal = ({addItem, total}: IProps) => {
    const [isOpen, toggleModal] = useState(false);
    const [form, setForm] = useState({id: total + 1, title: '', date: new Date(), description: ''});
    const [errors, setError] = useState({title: '', description: ''});
    const handleChange = (e: IEvent) => {
        setForm({...form, [e.target.name]: e.target.value})
    };

    const handleAddItem = () => {
        if (checkError()) {
            return;
        }
        form.date = new Date(form.date);
        addItem(form);
        toggleModal(!isOpen);
        setForm({id: total + 1, title: '', date: new Date(), description: ''});
    };

    const checkError = () => {
        let err = {
            title: '',
            description: ''
        };
        let count = 0;
        if (!form.title) {
            err.title = `Title is required`;
            count++;
        }
        if (!form.description) {
            err.description = `Description is required`;
            count++;
        }
        setError(err);
        return count > 0
    };

    return (
        <React.Fragment>
            <Button onClick={() => toggleModal(!isOpen)}>Show Modal</Button>
            <Modal centered={true} open={isOpen} onClose={() => toggleModal(!isOpen)} closeIcon>
                <Header icon='archive' content='Add Item'/>
                <Modal.Content>
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Input
                                fluid
                                label='Title'
                                name='title'
                                value={form.title}
                                placeholder='Title'
                                error={Boolean(!!errors.title)}
                                onChange={(e) => handleChange(e)}/>
                            <Form.Input
                                type='date'
                                fluid label='Date'
                                name='date'
                                value={form.date}
                                placeholder='Date'
                                onChange={(e) => handleChange(e)}/>
                            <Form.Input
                                fluid
                                label='Description'
                                name='description'
                                value={form.description}
                                error={Boolean(!!errors.description)}
                                onChange={(e) => handleChange(e)}
                                placeholder='Description'/>
                        </Form.Group>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='red' onClick={() => toggleModal(!isOpen)}>
                        <Icon name='remove'/> No
                    </Button>
                    <Button color='green' onClick={() => handleAddItem()}>
                        <Icon name='checkmark'/> Yes
                    </Button>
                </Modal.Actions>
            </Modal>
        </React.Fragment>
    )
};

export default AddModal;