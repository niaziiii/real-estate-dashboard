import React from 'react'
import './widgets.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Widgets = (prop) => {
    let type = prop.type;
    let data;

    switch (type) {
        case 'rentProperties':
            data = {
                title: 'Rent assests',
                link: '/',
                icon: <i style={{ background: 'rgba(236, 77, 77, 0.562)', color: 'rgb(163, 45, 45)' }}><HouseSidingIcon /></i>,
                status: '100',
                description: 'Check rental properties'
            }
            break;
        case 'saleProperties':
            data = {
                title: 'Selling assests',
                link: '/',
                icon: <i style={{ background: '#147fbd59', color: 'rgba(0, 24, 241, 0.979)' }}><StorefrontIcon /></i>,
                status: '100',
                description: 'Check selling properties'
            }
            break;
        case 'viewRequests':
            data = {
                title: 'View requests',
                link: '/',
                icon: <i style={{ background: '#e47ccd59', color: 'rgba(233, 0, 241, 0.979)' }}><VisibilityIcon /></i>,
                status: '100',
                description: 'Check view requests'
            }
            break;
        default:
            break;
    }

    return (
        <div className='widgets'>
            <div className="widgets__users">
                <h5>{data.title}</h5>
                <span>
                    <i><KeyboardArrowUpIcon /></i>
                    <h4>20%</h4>
                </span>
            </div>
            <h1>{data.status}</h1>
            <div className="widgets__users">
                <h5>{data.description}</h5>
                <span>
                    <i>{data.icon}</i>
                </span>
            </div>
        </div>
    )
}

export default Widgets
