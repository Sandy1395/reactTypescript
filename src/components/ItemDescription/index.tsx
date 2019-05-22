import React from 'react';
import { ListContext } from '../../contexts/listContexts';
import DisplayDescription from './DisplayDescription';

const ItemDescription = (props: any) => {
    return (
        <ListContext.Consumer>
            {value => (
                <DisplayDescription items={value.items} id={props.match.params.id}/>
            )}
        </ListContext.Consumer>
    );
}

export default ItemDescription;
