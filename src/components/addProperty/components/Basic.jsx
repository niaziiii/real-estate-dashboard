import React from 'react'
import './../addProperty.scss'
import { BsImage } from 'react-icons/bs'
import { Button } from '@mui/material'
import { Formik } from 'formik';
import * as yup from "yup";
import { basicProperty, validateBasicProperty, InputFields } from '../property';

const Basic = () => {
    const [image] = React.useState(null);
    const formik = Formik({
        initialValues: {
            ...basicProperty
        },
        validationSchema: yup.object(validateBasicProperty),
        onSubmit: (value) => {
            console.log(value);
        }
    })

    const formData = formik.props.value;
    return (
        <div className='basic'>
            <div className="title-form"><h5>Basic Info</h5></div>
            <div className="basic__coverImg">
                {image ? <img src={image} alt='property-img' /> : <BsImage />}
            </div>

            <form action='#' className="basic__fields" onSubmit={(e) => {
                e.preventDefault()
                formData.handleSubmit()
            }}>


                <InputFields
                    type='text'
                    name='nameProperty'
                    id='nameProperty'
                    label='Property Name'
                    formik={formData}
                    values={formData.values.nameProperty}
                    error={formData.touched.nameProperty && formData.errors.nameProperty ? formData.errors.nameProperty : null}
                />

                <InputFields
                    type='text'
                    name='category'
                    id='category'
                    label='Property Category'
                    formik={formData}
                    values={formData.values.category}
                    error={formData.touched.category && formData.errors.category ? formData.errors.category : null}
                />


                <InputFields
                    type='text'
                    name='price'
                    id='price'
                    label='Property price'
                    formik={formData}
                    values={formData.values.price}
                    error={formData.touched.price && formData.errors.price ? formData.errors.price : null}
                />


                <InputFields
                    type='text'
                    name='location'
                    id='location'
                    label='Property location'
                    formik={formData}
                    values={formData.values.location}
                    error={formData.touched.location && formData.errors.location ? formData.errors.location : null}
                />


                <InputFields
                    type='text'
                    name='area'
                    id='area'
                    label='Property area'
                    formik={formData}
                    values={formData.values.area}
                    error={formData.touched.area && formData.errors.area ? formData.errors.area : null}
                />
                <InputFields
                    type='text'
                    name='beds'
                    id='beds'
                    label='Property beds'
                    formik={formData}
                    values={formData.values.beds}
                    error={formData.touched.beds && formData.errors.beds ? formData.errors.beds : null}
                />
                <InputFields
                    type='text'
                    name='bathrooms'
                    id='bathrooms'
                    label='Property bathrooms'
                    formik={formData}
                    values={formData.values.bathrooms}
                    error={formData.touched.bathrooms && formData.errors.bathrooms ? formData.errors.bathrooms : null}
                />


                <div className="basic__fields__inputs">
                    <label htmlFor="coverImages"><BsImage /> Chose Image</label>
                    <input
                        type='file'
                        name='coverImages'
                        id='coverImages' style={{ display: 'none' }}
                        value={formData.values.file}
                        onChange={formData.handleChange}
                        onBlur={formData.handleBlur}
                    />
                    <p className='error-field'>{formData.touched.file && formData.errors.file ? formData.errors.file : null}</p>
                </div>

                <div className="basic__fields__inputs">
                    <label htmlFor="type">Property Type</label>
                    <select name='type' id='type' onChange={formData.handleChange} onBlur={formData.handleBlur} >
                        <option value="">Select Property Type</option>
                        <option value="sale">Sale</option>
                        <option value="rent">Rent</option>
                    </select>
                    <p className='error-field'>{formData.touched.type && formData.errors.type ? formData.errors.type : null}</p>
                </div>

                <div className="basic__fields__inputs">
                    <Button type='submit' style={{ background: '#1480bd' }}>submit</Button>
                </div>

            </form>

        </div>
    )
}

export default Basic
