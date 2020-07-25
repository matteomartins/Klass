import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import moment from "moment";
import MomentUtils from '@date-io/moment';
import "moment/locale/pt-br";
import { KeyboardDatePicker,  MuiPickersUtilsProvider } from '@material-ui/pickers';
import './styles.css';

moment.locale("pt-br")

export default function Form({ columns, onSubmit }) {

    return (
      <form onSubmit={onSubmit} className="form">               
        {columns.map(({items, name, ...rest }) => (
          <div key={name} className="session" {...rest}>
              {items.map(({placeholder, key, type, value, onChange, maxLength=50, items})=> {
                if(type==="select") return (
                  <FormControl key={key} variant="filled" className="form-control">
                    <InputLabel className="select-label">{placeholder}</InputLabel>
                    <Select
                      className="select-content"
                      value={value}
                      onChange={onChange}
                    >
                      {items.map(({value, id})=>(
                        <MenuItem key={id} value={id}>{value}</MenuItem>
                      ))}
                      
                    </Select>
                  </FormControl>
                );
                else if(type==="date") return (
                  <MuiPickersUtilsProvider key={key} className="div-input-date" utils={MomentUtils} locale="pt-br">
                    <KeyboardDatePicker
                      emptyLabel={placeholder}
                      onFocus={e=> {onChange(e.target.value===placeholder?moment().format('DD/MM/YYYY'):moment(e.target.value).format('DD/MM/YYYY'))}}
                      invalidLabel="Insira uma data válida"
                      invalidDateMessage="Insira uma data válida"
                      maxDateMessage="A data deve ser menor ou igual a hoje"
                      minDateMessage="A data deve ser maior que a data mínima"
                      lang="pt-br"
                      className="input-date"
                      variant="inline"
                      id="date-picker-inline"
                      label="Date picker inline"
                      format="DD/MM/YYYY"
                      placeholder={placeholder}
                      value={value}
                      onChange={onChange}
                    />
                  </MuiPickersUtilsProvider>  
                );
                else return (
                  <input key={key} type={type} placeholder={placeholder} value={value} onChange={onChange} maxLength={maxLength} />
                );
              })}
          </div>
        ))}
      </form>
    )
  }
  