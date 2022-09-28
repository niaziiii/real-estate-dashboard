import { Button } from "@mui/material";
import { Link } from 'react-router-dom'

const columnsProperty = [
  { field: 'id', headerName: 'ID', width: 40 },
  {
    field: 'nameProperty',
    headerName: 'Name',
    width: 250,
    sortable: false,
    renderCell: (params) => {
      return (<div className="table-image-name">
        <img src={params.row.coverImages} alt="property-img" />
        <p>{params.row.nameProperty.slice(0, 25)}</p>
      </div>)
    }
  },
  { field: 'type', headerName: 'Type', width: 150 },
  { field: 'category', headerName: 'Category', width: 150 },
  {
    field: 'action', headerName: 'Action', width: 200, sortable: false,
    renderCell: (params) => {
      return (<div className="actionButton">
        <Button><Link to={'/property/' + params.row.id}>View</Link></Button>
        <Button>Delete</Button>
      </div>)
    }
  },

];

const rowsProperty = [
  {
    id: 1,
    nameProperty: 'Snow',
    type: 'Jon',
    category: 35,
    coverImages: "https://images.unsplash.com/photo-1580892138193-0781eef7caf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=804&q=80"

  },
  {
    id: 2, nameProperty: 'Lannisterdfdn6sdf54494vv', type: 'Cersei', category: 42,
    coverImages: "https://images.unsplash.com/photo-1580892138193-0781eef7caf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=804&q=80"

  },
  {
    id: 3, nameProperty: 'Lannister', type: 'Jaime', category: 45,
    coverImages: "https://images.unsplash.com/photo-1580892138193-0781eef7caf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=804&q=80"
  },
  {
    id: 4, nameProperty: 'Stark', type: 'Arya', category: 16,
    coverImages: "https://images.unsplash.com/photo-1580892138193-0781eef7caf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=804&q=80"
  },
  {
    id: 5, nameProperty: 'Targaryen', type: 'Daenerys', category: null,
    coverImages: "https://images.unsplash.com/photo-1580892138193-0781eef7caf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=804&q=80"
  },
  {
    id: 6, nameProperty: 'Melisandre', type: null, category: 150,
    coverImages: "https://images.unsplash.com/photo-1580892138193-0781eef7caf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=804&q=80"
  },
  {
    id: 7, nameProperty: 'Clifford', type: 'Ferrara', category: 44,
    coverImages: "https://images.unsplash.com/photo-1580892138193-0781eef7caf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=804&q=80"
  },
  {
    id: 8, nameProperty: 'Frances', type: 'Rossini', category: 36,
    coverImages: "https://images.unsplash.com/photo-1580892138193-0781eef7caf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=804&q=80"
  },
  {
    id: 9, nameProperty: 'Roxie', type: 'Harvey', category: 65,
    coverImages: "https://images.unsplash.com/photo-1580892138193-0781eef7caf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=804&q=80"
  },
];

const columnsRequest = [
  { field: 'id', headerName: 'ID', width: 40 },
  { field: 'name', headerName: 'Name', width: 150, sortable: false, },
  { field: 'email', headerName: 'Email Address', width: 150 },
  { field: 'phoneNumber', headerName: 'Contact No', width: 120 },
  { field: 'vistingDate', headerName: 'Visting Date', width: 120 },
  { field: 'duration', headerName: 'duration', width: 120 },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    renderCell: (params) => {
      return (
        <div className="statusButton">
          {
            params.row.property ? <Button style={{ background: '#1480bd', color: 'white' }}>Property</Button> : <Button style={{ background: 'rgb(163, 45, 45)', color: 'white' }}>Site</Button>
          }
        </div>
      )
    }
  },



  {
    field: 'action', headerName: 'Action', width: 200, sortable: false,
    renderCell: (params) => {
      return (<div className="actionButton">
        <Button>Readed</Button>
        <Button>Delete</Button>
      </div>)
    }
  },

];

const rowsRequest = [
  { id: 1, name: 'Snow john', location: 'Ghq3', phoneNumber: '12345678910', vistingDate: '15/04/2022', email: 'ali03@email.com', duration: 'Morning',property:true },
  { id: 2, name: 'Snow john', location: 'Ghq3', phoneNumber: '12345678910', vistingDate: '15/04/2022', email: 'ali03@email.com', duration: 'Morning' },
  { id: 3, name: 'Snow john', location: 'Ghq3', phoneNumber: '12345678910', vistingDate: '15/04/2022', email: 'ali03@email.com', duration: 'Morning' },
  { id: 4, name: 'Snow john', location: 'Ghq3', phoneNumber: '12345678910', vistingDate: '15/04/2022', email: 'ali03@email.com', duration: 'Morning' },
  { id: 5, name: 'Snow john', location: 'Ghq3', phoneNumber: '12345678910', vistingDate: '15/04/2022', email: 'ali03@email.com', duration: 'Morning' ,property:true },
  { id: 6, name: 'Snow john', location: 'Ghq3', phoneNumber: '12345678910', vistingDate: '15/04/2022', email: 'ali03@email.com', duration: 'Morning' },
  { id: 7, name: 'Snow john', location: 'Ghq3', phoneNumber: '12345678910', vistingDate: '15/04/2022', email: 'ali03@email.com', duration: 'Morning' },
  { id: 8, name: 'Snow john', location: 'Ghq3', phoneNumber: '12345678910', vistingDate: '15/04/2022', email: 'ali03@email.com', duration: 'Morning' },
  { id: 9, name: 'Snow john', location: 'Ghq3', phoneNumber: '12345678910', vistingDate: '15/04/2022', email: 'ali03@email.com', duration: 'Morning' },
  { id: 10, name: 'Snow john', location: 'Ghq3', phoneNumber: '12345678910', vistingDate: '15/04/2022', email: 'ali03@email.com', duration: 'Morning' },
  { id: 11, name: 'Snow john', location: 'Ghq3', phoneNumber: '12345678910', vistingDate: '15/04/2022', email: 'ali03@email.com', duration: 'Morning' },

];
export {
  rowsProperty,
  columnsProperty,
  columnsRequest,
  rowsRequest
}