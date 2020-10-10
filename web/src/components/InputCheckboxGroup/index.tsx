import React, { HTMLAttributes } from 'react'

import './styles.css';
import InputCheckbox from '../InputCheckbox';
import { TurnProps } from '../../utils/CommonInterfaces';

interface InputCheckboxGroupProps extends HTMLAttributes<HTMLDivElement> {
    turns: Array<TurnProps>;
    setTurns: Function;
    selectedTurn: number;
}

const InputCheckboxGroup:React.FC<InputCheckboxGroupProps> = ({turns, setTurns, selectedTurn, ...rest}) => {

    function handleSelect(e:any) {
        let newTurns = turns;
        const newDays = turns[selectedTurn].content.days || [];
        if(e.checked) newDays.push(+e.value);
        else {
            const index = newDays.indexOf(e.value);
            newDays.splice(index, 1);
        }
        newTurns[selectedTurn].content.days = newDays;
        setTurns([...newTurns]);
    }

    return (
        <div className="creation-input-checkbox-group" {...rest} >
            <InputCheckbox name="0" checked={turns[selectedTurn].content.days?.includes(0) || false} text="D" onChange={e => handleSelect(e.target)} />
            <InputCheckbox name="1" checked={turns[selectedTurn].content.days?.includes(1) || false} text="S" onChange={e => handleSelect(e.target)}  />
            <InputCheckbox name="2" checked={turns[selectedTurn].content.days?.includes(2) || false} text="T" onChange={e => handleSelect(e.target)}  />
            <InputCheckbox name="3" checked={turns[selectedTurn].content.days?.includes(3) || false} text="Q" onChange={e => handleSelect(e.target)}  />
            <InputCheckbox name="4" checked={turns[selectedTurn].content.days?.includes(4) || false} text="Q" onChange={e => handleSelect(e.target)}  />
            <InputCheckbox name="5" checked={turns[selectedTurn].content.days?.includes(5) || false} text="S" onChange={e => handleSelect(e.target)}  />
            <InputCheckbox name="6" checked={turns[selectedTurn].content.days?.includes(6) || false} text="S" onChange={e => handleSelect(e.target)}  />
        </div>
    )
}

export default InputCheckboxGroup;