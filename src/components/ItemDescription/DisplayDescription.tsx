import React from 'react';
import {Redirect} from "react-router";
import {Card} from 'semantic-ui-react'

import {AddItemPayload} from '../../reducers/listReducers';
import {convertedDate} from "../../Utils/helper";

interface IProps {
    items: AddItemPayload[],
    id: number
}

const DisplayDescription = ({items, id}: IProps) => {
    const item = items.find((i: AddItemPayload) => i.id === +id) as AddItemPayload;
    if (!item) {
        return <Redirect to="/"/>
    }
    const cardData = [{
        header: item.title,
        description: item.description,
        meta: convertedDate(item.date),
    }];
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '1rem'
        }}>
            <h3>Item Description</h3>
            <div>
                <Card.Group items={cardData}/>
            </div>
        </div>
    )
};

export default DisplayDescription;