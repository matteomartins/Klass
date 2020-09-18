import React, { useState } from "react";
import { useAlert } from "react-alert";

import "./styles.css";

import SchoolMenu from "../../components/SchoolMenu";
import { KaAddButton } from "../../assets/icons";
import ContentCard from "../../components/ContentCard";
import { Link } from "react-router-dom";
import EnterSchool from "../../components/EnterSchool";
import InitialCreateSchool from "../../components/CreateSchool/InitialCreate";

function Home() {
    const [activeInitial, setActiveInitial] = useState(false);
    const [activeMenu, setActiveMenu] = useState(false);
    const [activeEnterSchool, setActiveEnterSchool] = useState(false);
    const alert = useAlert();

    return (
        <div className="home-container">
            <div className="header-home">
                <div className="add-icon" onClick={() => setActiveMenu(true)}>
                    <KaAddButton size={32} color="#39729D" />
                </div>
            </div>
            <div className="scroll-view">
                <div className="school-cards-container">
                    <Link to="/school">
                        <h1>Etec de Taboão Da Serra </h1>
                    </Link>
                    <div className="classes">
                        <ContentCard
                            to="/class"
                            title="1A"
                            text="1 ANO A"
                            color="#0792A9"
                        />
                        <ContentCard
                            title="1B"
                            text="1 ANO B"
                            color="#0792A9"
                            onClick={() => alert.error("Alerta chave!")}
                        />
                        <ContentCard
                            title="2A"
                            text="2 ANO A"
                            color="#F68237"
                            onClick={() => alert.success("Alerta chave!")}
                        />
                        <ContentCard
                            title="2B"
                            text="2 ANO B"
                            color="#F68237"
                            onClick={() => alert.info("Alerta chave!")}
                        />
                        <ContentCard
                            title="3A"
                            text="3 ANO A"
                            color="#B7B345"
                        />
                        <ContentCard
                            title="3B"
                            text="3 ANO B"
                            color="#B7B345"
                        />
                        <ContentCard
                            title="4A"
                            text="4 ANO A"
                            color="#DE6E4B"
                        />
                    </div>
                </div>
                <div className="school-cards-container">
                    <Link to="/school">
                        <h1>Etec de Embu das Artes</h1>
                    </Link>
                    <div className="classes">
                        <ContentCard
                            title="1A"
                            text="1 ANO A"
                            color="#0792A9"
                        />
                        <ContentCard
                            title="1B"
                            text="1 ANO B"
                            color="#0792A9"
                        />
                        <ContentCard
                            title="2A"
                            text="2 ANO A"
                            color="#F68237"
                        />
                        <ContentCard
                            title="2B"
                            text="2 ANO B"
                            color="#F68237"
                        />
                        <ContentCard
                            title="3A"
                            text="3 ANO A"
                            color="#B7B345"
                        />
                        <ContentCard
                            title="3B"
                            text="3 ANO B"
                            color="#B7B345"
                        />
                    </div>
                </div>
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
