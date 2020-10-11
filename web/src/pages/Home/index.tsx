import React, { useEffect, useState } from "react";

import "./styles.css";

import SchoolMenu from "../../components/SchoolMenu";
import { KaAddButton } from "../../assets/icons";
import ContentCard from "../../components/ContentCard";
import { Link } from "react-router-dom";
import EnterSchool from "../../components/Modals/EnterSchool";
import api from "../../services/api";
import { getColor } from "../../utils/colors";
import InitialCreateSchool from "../../components/Modals/InitialCreate";

function Home() {
    const [activeInitial, setActiveInitial] = useState(false);
    const [activeMenu, setActiveMenu] = useState(false);
    const [activeEnterSchool, setActiveEnterSchool] = useState(false);
    const [schools, setSchools] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } =  await api.get('/home');
            setSchools(data.home);
        })()
    }, []);

    return (
        <div className="home-container">
            <div className="header-home">
                <div className="add-icon" onClick={() => setActiveMenu(true)}>
                    <KaAddButton size={32} color="#39729D" />
                </div>
            </div>
            <div className="scroll-view">
                {schools.map(({name, school_id, groups = []}, ind) => (
                    <div key={ind} className="school-cards-container">
                        <Link to={`/school?id=${school_id}`}>
                            <h1>{name}</h1>
                        </Link>
                        <div className="classes">
                            {groups.map(({name = "", id}, ind) => (
                                <ContentCard
                                    key={ind}
                                    to={`/class?id=${school_id}&module=${id}`}
                                    title={name.substr(0,1)+name.substr(-1,1)}
                                    text={name}
                                    color={getColor(name, ind)}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <SchoolMenu
                active={activeMenu}
                setActive={setActiveMenu}
                enterSchool={() => setActiveEnterSchool(true)}
                createSchool={() => setActiveInitial(true)}
            />
            <EnterSchool
                active={activeEnterSchool}
                setActive={setActiveEnterSchool}
            />
            <InitialCreateSchool
                active={activeInitial} 
                setActive={setActiveInitial} 
            />

        </div>
    );
}

export default Home;
