import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Table} from 'semantic-ui-react';
import {convertedDate} from '../../Utils/helper';
import {AddItemPayload} from '../../reducers/listReducers';

interface IProps {
    items: AddItemPayload[]
}

const ItemTable = ({items}: IProps) => {
    const [column, setColumn] = useState('');
    const [direction, setDirection] = useState(undefined);
    const [data, setData] = useState(items);
    const handleSort = (clickedColumn: any) => () => {
        if (column !== clickedColumn) {
            setColumn(clickedColumn);
            //@ts-ignore
            setDirection('ascending');
            setData(data.sort((a: any, b: any) => a[clickedColumn] - b[clickedColumn]))
            return;
        }
        setData(data.reverse());
        //@ts-ignore
        setDirection(direction === 'ascending' ? 'descending' : 'ascending');
    }

    useEffect(() => {
        return setData(items);
    }, [items]);

    return (
        <div>
            <Table sortable celled fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell
                            sorted={column === 'title' ? direction : undefined}
                            onClick={handleSort('title')}
                        >
                            Title
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'date' ? direction : undefined}
                        >
                            Date
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            Action
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {data.map((item, index) => (
                        <Table.Row key={index}>
                            <Table.Cell>{item.title}</Table.Cell>
                            <Table.Cell>{convertedDate(item.date)}</Table.Cell>
                            <Table.Cell><Link to={`item/${item.id}`}>Description</Link></Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>

    );
}

export default ItemTable;
