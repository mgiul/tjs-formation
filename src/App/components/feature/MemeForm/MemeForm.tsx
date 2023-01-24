import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import style from './MemeForm.module.css'

export interface IMemeFormProps {
    style?: {}
}

export interface IMemeFormState { }

export const initialState: IMemeFormState = {}

const MemeForm: React.FC<IMemeFormProps> = (props) => {
    const [state, setstate] = useState(initialState);
    useEffect(() => {
        // Cmpdidmount
    }, []);
    return (
        <div className={style.MemeForm}
            data-testid="MemeForm"
            style={props.style}>
            MemeForm
        </div>
    );
};
MemeForm.propTypes = {
    style: PropTypes.object,
}
MemeForm.defaultProps = {}

export default MemeForm;
