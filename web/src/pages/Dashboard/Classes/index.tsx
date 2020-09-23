import React from "react";
import "./styles.css";

import ContentCard from "../../../components/ContentCard";
import { Link } from "react-router-dom";
import BackButton from "../../../components/BackButton";

function Classes() {
    return (
        <div className="classes-container">
            <BackButton to="/dashboard" />
            <div className="scroll-view">
                <div className="classes-cards-container">
                    <Link to="/school">
                        <h1>Turno: Manhã </h1>
                    </Link>
                    <div className="classes">
                        <ContentCard
                            small
                            title="8"
                            text="1° ANO A"
                            color="#0792A9"
                        />
                        <ContentCard
                            small
                            title="9"
                            text="1° ANO B"
                            color="#0792A9"
                        />
                        <ContentCard
                            small
                            title="1"
                            text="2° ANO A"
                            color="#F68237"
                        />
                        <ContentCard
                            small
                            title="2"
                            text="2° ANO B"
                            color="#F68237"
                        />
                        <ContentCard
                            small
                            title="3"
                            text="3° ANO A"
                            color="#B7B345"
                        />
                    </div>
                </div>
                <div className="classes-cards-container">
                    <Link to="/school">
                        <h1>Turno: Tarde</h1>
                    </Link>
                    <div className="classes">
                        <ContentCard
                            small
                            title="8"
                            text="1° ANO A"
                            color="#0792A9"
                        />
                        <ContentCard
                            small
                            title="9"
                            text="1° ANO B"
                            color="#0792A9"
                        />
                        <ContentCard
                            small
                            title="1"
                            text="2° ANO A"
                            color="#F68237"
                        />
                        <ContentCard
                            small
                            title="2"
                            text="2° ANO B"
                            color="#F68237"
                        />
                        <ContentCard
                            small
                            title="3"
                            text="3° ANO A"
                            color="#B7B345"
                        />
                    </div>
                </div>
                <div className="classes-cards-container">
                    <Link to="/school">
                        <h1>Turno: Noite </h1>
                    </Link>
                    <div className="classes">
                        <ContentCard
                            small
                            title="8"
                            text="1° ANO A"
                            color="#0792A9"
                        />
                        <ContentCard
                            small
                            title="9"
                            text="1° ANO B"
                            color="#0792A9"
                        />
                        <ContentCard
                            small
                            title="1"
                            text="2° ANO A"
                            color="#F68237"
                        />
                        <ContentCard
                            small
                            title="2"
                            text="2° ANO B"
                            color="#F68237"
                        />
                        <ContentCard
                            small
                            title="3"
                            text="3° ANO A"
                            color="#B7B345"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Classes;
