import React, { useState } from "react";
import "./styles.css";

import Subject from "../../components/InfoModals/Subject";
import ContentCard from "../../components/ContentCard";
import BackButton from "../../components/BackButton";

function Grade() {
    const [active, setActive] = useState(false);
    return (
        <div className="grade-container">
            <BackButton to="/home" />
            <div className="scroll-view">
                <div className="school-cards-container">
                    <h1>1° ANO A</h1>
                    <div className="classes">
                        <ContentCard
                            title="P"
                            text="PORTUGUÊS"
                            color="#0792A9"
                            onClick={() => setActive(true)}
                            style={{cursor: 'pointer'}}
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

export default Grade;
