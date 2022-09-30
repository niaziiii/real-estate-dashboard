import * as yup from "yup";

const InputFields = (prop) => {
    const { type, name, formik, label, values, error } = prop;
    return (
        <div className="basic__fields__inputs">
            <label htmlFor={name}>{label}</label>
            <input
                type={type ? type : 'text'}
                name={name} id={name}
                onChange={(e) => formik.handleChange(e)}
                onBlur={(e) => formik.handleBlur(e)}
                value={values}
            />
            <p className='error-field'>{error ? error : null}</p>
        </div>
    )
}


const basicProperty = {
    nameProperty: '',
    category: '',
    price: '',
    location: '',
    area: '',
    beds: '',
    bathrooms: '',
    coverImages: [],
    type: '',
}
const ordainaryProperty = {
    description: '',
}

const validateOrdainaryProperty = {
    description: yup.string()
        .required('Property description required'),
}
const validateBasicProperty = {
    nameProperty: yup.string()
        .required('Property name is required'),
    category: yup.string()
        .required('Property category is required'),
    price: yup.string()
        .required('Property price is required'),
    location: yup.string()
        .required('Property location is required'),
    area: yup.string()
        .required('Property area as SQ required'),
    beds: yup.string()
        .required('required'),
    bathrooms: yup.string()
        .required('required'),
    type: yup.string()
        .required('Property type must required')
}

export {
    InputFields,
    validateBasicProperty,
    validateOrdainaryProperty,
    basicProperty,
    ordainaryProperty,
}