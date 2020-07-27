import React from 'react';
import {KaPdf, KaGoogle, KaMail, KaPassword, KaUser, KaUserOutline, KaCircleSelected, KaCircleOutline, KaMenu, KaExcel, KaPrinter, KaCalendar } from '../../assets/icons/ka'

export default function Login() {

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent:'space-around',height: '100vh'}}>
            <KaGoogle color="#fff" size={48} />
            <KaMail color="#fff" size={48} />
            <KaPassword color="#fff" size={48} />
            <KaUser color="#fff" size={48} />
            <KaUserOutline color="#fff" size={48} />
            <KaCircleSelected color="#fff" size={48} />
            <KaCircleOutline color="#fff" size={48} />
            <KaMenu color="#fff" size={48} />
            <KaCalendar color="#fff" size={47} />
            <KaPdf size={48} />
            <KaExcel size={48} />
            <KaPrinter size={48} />
        </div>
    );

}