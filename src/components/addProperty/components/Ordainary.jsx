import React from 'react'
import './../addProperty.scss'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const obj = {
    description: '',
    amenities: []
}

const Ordainary = () => {
    const [data, setData] = React.useState(obj ? {
        description: '',
        amenities: [1, 2, 3, '3', '5', 4, 5]
    } : obj);
    const [amen, setImen] = React.useState('')


    const deleteAmenities = (i) => {
        const array = data.amenities;
        if (i > -1) array.splice(i, 1);
        setData(prev => {
            return ({
                ...prev,
                amenities: [...array]
            })
        })
    }
    const addDescription = (e) => {
        setData(prev => {
            return (
                { ...prev, description: e.target.value }
            )
        })
    }

    console.log(data);
    return (
        <div className='ordainary'>
            <div className="title-form"><h5>Extas</h5></div>

            <form action="#" onSubmit={(e) => {
                e.preventDefault()
            }}>

                <div className="basic__fields__inputs">
                    <label htmlFor='description'>Property Description</label>
                    <input
                        type='text'
                        name='description'
                        id='description'
                        onChange={addDescription}
                        value={data.description}
                    />
                </div>

                <div className="basic__fields__inputs">
                    <div className="amenities__container" id='amenities'>
                        <label htmlFor='amenities'>Property Amenities</label>
                        <div className="amenities__container__data">
                            {data.amenities.map((el, i) => {
                                return (
                                    <span key={i}>
                                        <p>{el}</p>
                                        <i onClick={() => deleteAmenities(i)}><RemoveCircleIcon /></i>
                                    </span>
                                )
                            })}
                        </div>
                        <div className="amenities__container__add">
                            <input
                                type="text"
                                onChange={(e) => setImen(e.target.value)}
                                value={amen}
                            />
                            <Button onClick={() => {
                                const prevv = data.amenities;
                                if(amen.length === 0) return;
                                setData(prev => {
                                    return ({
                                        ...prev,
                                        amenities: [...prevv, amen]
                                    })
                                })

                                setImen('')

                            }}><AddIcon /></Button>
                        </div>
                    </div>
                </div>

                <div className="basic__fields__inputs">
                    <Button type='submit' style={{ background: '#1480bd' }}>submit</Button>
                </div>
            </form>
        </div>
    )
}

export default Ordainary



