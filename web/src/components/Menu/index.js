import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { FiUser } from 'react-icons/fi';
import {Link} from 'react-router-dom';

import './styles.css';


export default function Menu(props) {

    const [openCompany, setOpenCompany] = React.useState(false);
    const [openEmployee, setOpenEmployee] = React.useState(false);
    const [openClient, setOpenClient] = React.useState(false);

  return (
    <div className="menu-container">
        <h1>VV Serviços Administrativos</h1>
        <div className="greet">
            <FiUser size={24} />
            <p>Bem Vindo, Vinicius</p>
        </div>
        <List className="list-content" disablePadding>
                <Link to="/home">
                    <ListItem button className="nested">
                        <ListItemText primary="Home" />
                    </ListItem>
                </Link>
                <Link to="/dashboard">
                    <ListItem button className="nested">
                        <ListItemText primary="DashBoard" />
                    </ListItem>
                </Link>
                <Link to="/notifications">
                    <ListItem button className="nested">
                        <ListItemText primary="Notificações" />
                    </ListItem>
                </Link>
                <ListItem button onClick={()=>{setOpenCompany(!openCompany)}}>
                    <ListItemText primary="Empresas" />
                    {openCompany ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openCompany} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding dense>
                        <Link to="/company/register">
                            <ListItem button className="nested">
                                <ListItemText primary="Cadastrar" />
                            </ListItem>
                        </Link>
                        <Link to="/company/list">
                            <ListItem button className="nested">
                                <ListItemText primary="Listar" />
                            </ListItem>
                        </Link>
                    </List>
                </Collapse>
                <ListItem button onClick={()=>{setOpenEmployee(!openEmployee)}}>
                    <ListItemText primary="Funcionários" />
                    {openEmployee ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openEmployee} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding dense>
                        <Link to="/employees/register">
                            <ListItem button className="nested">
                                <ListItemText primary="Cadastrar" />
                            </ListItem>
                        </Link>
                        <Link to="/employees/list">
                            <ListItem button className="nested">
                                <ListItemText primary="Listar" />
                            </ListItem>
                        </Link>
                        <Link to="/employees/position">
                            <ListItem button className="nested">
                                <ListItemText primary="Editar Cargos" />
                            </ListItem>
                        </Link>
                    </List>
                </Collapse>
                <ListItem button onClick={()=>{setOpenClient(!openClient)}}>
                    <ListItemText primary="Clientes" />
                    {openClient ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openClient} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding dense>
                        <ListItem button className="nested">
                            <ListItemText primary="Cadastrar" />
                        </ListItem>
                        <ListItem button className="nested">
                            <ListItemText primary="Listar" />
                        </ListItem>
                    </List>
                </Collapse>
        </List>
    </div>
  )
};
