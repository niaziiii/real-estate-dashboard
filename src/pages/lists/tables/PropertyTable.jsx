import React from 'react'
import './../list.scss'
import { rowsProperty, columnsProperty } from './data'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const PropertyTable = () => {

    return (
        <div className='PropertyTable'>
            <div className="PropertyTable__heading">
                <h5>Total Properties Uploaded</h5>
                <Link to='/property/new'><Button>Add new property</Button></Link>
            </div>
            <div className="PropertyTable__table">
                <DataGrid
                    rows={rowsProperty}
                    columns={columnsProperty}
                    pageSize={7}
                    rowsPerPageOptions={[5]}
                />
            </div>

        </div>
    )
}

export default PropertyTable
