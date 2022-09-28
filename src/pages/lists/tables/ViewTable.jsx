import React from 'react'
import './../list.scss'
import { columnsRequest, rowsRequest } from './data'
import { DataGrid } from '@mui/x-data-grid';

const ViewTable = () => {
  return (
    <div>
       <div className='ViewTable'>
            <div className="ViewTable__heading">
                <h5>Total Requests</h5>
            </div>
            <div className="ViewTable__table">
                <DataGrid
                    rows={rowsRequest}
                    columns={columnsRequest}
                    pageSize={7}
                    rowsPerPageOptions={[5]}
                />
            </div>

        </div>
    </div>
  )
}

export default ViewTable
