import React from 'react'

import './styles.css';
import InputCheckbox from '../InputCheckbox';

interface InputCheckboxGroupProps {
}

const InputCheckboxGroup:React.FC<InputCheckboxGroupProps> = () => {

    return (
        <div className="creation-input-checkbox-group">
            <InputCheckbox name="0" text="S" />
            <InputCheckbox name="1" text="T" />
            <InputCheckbox name="2" text="Q" />
            <InputCheckbox name="3" text="Q" />
            <InputCheckbox name="4" text="S" />
            <InputCheckbox name="5" text="S" />
            <InputCheckbox name="6" text="D" />
        </div>
    )
}

export default InputCheckboxGroup;