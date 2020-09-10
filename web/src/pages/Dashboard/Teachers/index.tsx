import React, { useState } from "react";
import "./styles.css";

import TeacherProfile from "../../../components/InfoModals/TeacherProfile";
import ContentCard from "../../../components/ContentCard";
import { Link } from "react-router-dom";

function Home() {
    const [active, setActive] = useState(false);
    return (
        <div className="home-container5">
            <div className="scroll-view5" onClick={() => setActive(true)}>
                <div className="school-cards-container5">
                    <Link to="/school">
                        <h1>Administrativo</h1>
                    </Link>
                    <div className="classes5">
                        <ContentCard
                            small
                            rounded
                            title="P"
                            text="Pedro F."
                            color="#0792A9"
                        />
                        <ContentCard
                            small
                            rounded
                            title="M"
                            text="Matteo G."
                            color="#0792A9"
                        />
                        <ContentCard
                            small
                            rounded
                            title="F"
                            text="Furniqueiro S."
                            color="#F68237"
                        />
                        <ContentCard
                            small
                            rounded
                            title="T"
                            text="Thamires P."
                            color="#F68237"
                        />
                        <ContentCard
                            small
                            rounded
                            title="G"
                            text="Gabriela F."
                            color="#B7B345"
                        />
                        <ContentCard
                            small
                            rounded
                            title="M"
                            text="Manuela M."
                            color="#B7B345"
                        />
                    </div>
                </div>
                <div className="school-cards-container5">
                    <Link to="/school">
                        <h1>Professores</h1>
                    </Link>
                    <div className="classes5">
                        <ContentCard
                            small
                            rounded
                            title="P"
                            text="Pedro F."
                            color="#0792A9"
                        />
                        <ContentCard
                            small
                            rounded
                            title="M"
                            text="Matteo G."
                            color="#0792A9"
                        />
                        <ContentCard
                            small
                            rounded
                            title="F"
                            text="Furniqueiro S."
                            color="#F68237"
                        />
                        <ContentCard
                            small
                            rounded
                            title="T"
                            text="Thamires P."
                            color="#F68237"
                        />
                        <ContentCard
                            small
                            rounded
                            title="G"
                            text="Gabriela F."
                            color="#B7B345"
                        />
                        <ContentCard
                            small
                            rounded
                            title="M"
                            text="Manuela M."
                            color="#B7B345"
                        />
                        <ContentCard
                            small
                            rounded
                            title="P"
                            text="Pedro F."
                            color="#0792A9"
                        />
                        <ContentCard
                            small
                            rounded
                            title="M"
                            text="Matteo G."
                            color="#0792A9"
                        />
                        <ContentCard
                            small
                            rounded
                            title="F"
                            text="Furniqueiro S."
                            color="#F68237"
                        />
                        <ContentCard
                            small
                            rounded
                            title="T"
                            text="Thamires P."
                            color="#F68237"
                        />
                        <ContentCard
                            small
                            rounded
                            title="G"
                            text="Gabriela F."
                            color="#B7B345"
                        />
                        <ContentCard
                            small
                            rounded
                            title="M"
                            text="Manuela M."
                            color="#B7B345"
                        />
                        <ContentCard
                            small
                            rounded
                            title="P"
                            text="Pedro F."
                            color="#0792A9"
                        />
                        <ContentCard
                            small
                            rounded
                            title="M"
                            text="Matteo G."
                            color="#0792A9"
                        />
                        <ContentCard
                            small
                            rounded
                            title="F"
                            text="Furniqueiro S."
                            color="#F68237"
                        />
                        <ContentCard
                            small
                            rounded
                            title="T"
                            text="Thamires P."
                            color="#F68237"
                        />
                        <ContentCard
                            small
                            rounded
                            title="G"
                            text="Gabriela F."
                            color="#B7B345"
                        />
                        <ContentCard
                            small
                            rounded
                            title="M"
                            text="Manuela M."
                            color="#B7B345"
                        />
                        <ContentCard
                            small
                            rounded
                            title="P"
                            text="Pedro F."
                            color="#0792A9"
                        />
                        <ContentCard
                            small
                            rounded
                            title="M"
                            text="Matteo G."
                            color="#0792A9"
                        />
                        <ContentCard
                            small
                            rounded
                            title="F"
                            text="Furniqueiro S."
                            color="#F68237"
                        />
                        <ContentCard
                            small
                            rounded
                            title="T"
                            text="Thamires P."
                            color="#F68237"
                        />
                        <ContentCard
                            small
                            rounded
                            title="G"
                            text="Gabriela F."
                            color="#B7B345"
                        />
                        <ContentCard
                            small
                            rounded
                            title="M"
                            text="Manuela M."
                            color="#B7B345"
                        />
                    </div>
                </div>
            </div>
            <TeacherProfile active={active} setActive={setActive} />
        </div>
    );
}

export default Home;
