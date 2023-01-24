import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import style from './TemplateName.module.css'

export interface ITemplateNameProps {
    style?: {}
}

export interface ITemplateNameState { }

export const initialState: ITemplateNameState = {}

const TemplateName: React.FC<ITemplateNameProps> = (props) => {
    const [state, setstate] = useState(initialState);
    useEffect(() => {
        // Cmpdidmount
    }, []);
    return (
        <div className={style.TemplateName}
            data-testid="TemplateName"
            style={props.style}>
            TemplateName
        </div>
    );
};
TemplateName.propTypes = {
    style: PropTypes.object,
}
TemplateName.defaultProps = {}

export default TemplateName;
