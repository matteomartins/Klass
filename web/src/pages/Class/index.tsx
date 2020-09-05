import React, { useState } from "react";
import "./styles.css";

import Subject from "../../components/Subject";
import ContentCard from "../../components/ContentCard";
import { Link } from "react-router-dom";

function Home() {
    const [active, setActive] = useState(false);
    return (
        <div className="home-container4">
            <div className="scroll-view4" onClick={() => setActive(true)}>
                <div className="school-cards-container4">
                    <Link to="/school">
                        <h1>1° ANO A</h1>
                    </Link>
                    <div className="classes4">
                        <ContentCard
                            title="P"
                            text="PORTUGUÊS"
                            color="#0792A9"
                        />
                        <ContentCard
                            title="P"
                            text="PORTUGUÊS"
                            color="#0792A9"
                        />
                        <ContentCard
                            title="P"
                            text="PORTUGUÊS"
                            color="#0792A9"
                        />
                        <ContentCard
                            title="P"
                            text="PORTUGUÊS"
                            color="#0792A9"
                        />
                        <ContentCard
                            title="M"
                            text="MATEMÁTICA"
                            color="#0792A9"
                        />
                        <ContentCard
                            title="M"
                            text="MATEMÁTICA"
                            color="#0792A9"
                        />
                        <ContentCard
                            title="M"
                            text="MATEMÁTICA"
                            color="#0792A9"
                        />
                        <ContentCard
                            title="M"
                            text="MATEMÁTICA"
                            color="#0792A9"
                        />
                        <ContentCard title="F" text="FÍSICA" color="#F68237" />
                        <ContentCard title="F" text="FÍSICA" color="#F68237" />
                        <ContentCard title="F" text="FÍSICA" color="#F68237" />
                        <ContentCard title="F" text="FÍSICA" color="#F68237" />
                        <ContentCard
                            title="G"
                            text="GEOGRAFIA"
                            color="#F68237"
                        />
                        <ContentCard
                            title="G"
                            text="GEOGRAFIA"
                            color="#F68237"
                        />
                        <ContentCard
                            title="G"
                            text="GEOGRAFIA"
                            color="#F68237"
                        />
                        <ContentCard
                            title="G"
                            text="GEOGRAFIA"
                            color="#F68237"
                        />
                        <ContentCard
                            title="B"
                            text="BIOLOGIA"
                            color="#B7B345"
                        />
                        <ContentCard
                            title="B"
                            text="BIOLOGIA"
                            color="#B7B345"
                        />
                        <ContentCard
                            title="B"
                            text="BIOLOGIA"
                            color="#B7B345"
                        />
                        <ContentCard
                            title="B"
                            text="BIOLOGIA"
                            color="#B7B345"
                        />
                        <ContentCard title="Q" text="QUIMICA" color="#B7B345" />
                        <ContentCard title="Q" text="QUIMICA" color="#B7B345" />
                        <ContentCard title="Q" text="QUIMICA" color="#B7B345" />
                        <ContentCard title="Q" text="QUIMICA" color="#B7B345" />
                    </div>
                </div>
            </div>
            <Subject active={active} setActive={setActive} />
        </div>
    );
}

export default Home;
