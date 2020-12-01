import React from 'react';
import { Pagination } from 'react-bootstrap';
import PageItem from 'react-bootstrap/PageItem';

const Paginacion = ({postPerPage,totalPost}) => {
    let active = 1;
    let items = [];
    for (let number = 1; number <= Math.ceil(totalPost/postPerPage); number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <div>
            <Pagination>{items}</Pagination>
        </div>
    );
}

export default Paginacion;