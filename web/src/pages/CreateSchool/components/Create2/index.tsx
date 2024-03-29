import React from "react";

import "./styles.css";
import Picture1 from "../../../../assets/school_icons/1.png";
import Picture2 from "../../../../assets/school_icons/2.png";
import Picture3 from "../../../../assets/school_icons/3.png";
import Picture4 from "../../../../assets/school_icons/4.png";
import Picture5 from "../../../../assets/school_icons/5.png";
import Picture6 from "../../../../assets/school_icons/6.png";
import Picture7 from "../../../../assets/school_icons/7.png";
import Picture8 from "../../../../assets/school_icons/8.png";
import Picture9 from "../../../../assets/school_icons/9.png";
import Picture10 from "../../../../assets/school_icons/10.png";
import Picture11 from "../../../../assets/school_icons/11.png";
import Picture12 from "../../../../assets/school_icons/12.png";
import Picture13 from "../../../../assets/school_icons/13.png";
import Picture14 from "../../../../assets/school_icons/14.png";
import Picture15 from "../../../../assets/school_icons/15.png";
import Picture16 from "../../../../assets/school_icons/16.png";
import Picture17 from "../../../../assets/school_icons/17.png";
import Picture18 from "../../../../assets/school_icons/18.png";
import Picture19 from "../../../../assets/school_icons/19.png";
import Picture20 from "../../../../assets/school_icons/20.png";
import Picture21 from "../../../../assets/school_icons/21.png";
import Picture22 from "../../../../assets/school_icons/22.png";
import Picture23 from "../../../../assets/school_icons/32.png";
import Picture24 from "../../../../assets/school_icons/24.png";
import Picture25 from "../../../../assets/school_icons/25.png";
import Picture26 from "../../../../assets/school_icons/26.png";
import Picture27 from "../../../../assets/school_icons/27.png";
import Picture28 from "../../../../assets/school_icons/28.png";
import Picture29 from "../../../../assets/school_icons/29.png";
import Picture30 from "../../../../assets/school_icons/30.png";
import Picture31 from "../../../../assets/school_icons/31.png";
import Picture32 from "../../../../assets/school_icons/32.png";
import Picture33 from "../../../../assets/school_icons/33.png";
import Picture34 from "../../../../assets/school_icons/34.png";
import Picture35 from "../../../../assets/school_icons/35.png";
import Picture36 from "../../../../assets/school_icons/36.png";
import Picture37 from "../../../../assets/school_icons/37.png";
import Picture38 from "../../../../assets/school_icons/38.png";
import Picture39 from "../../../../assets/school_icons/39.png";
import Picture40 from "../../../../assets/school_icons/40.png";
import Picture41 from "../../../../assets/school_icons/41.png";
import Picture42 from "../../../../assets/school_icons/42.png";
import Picture43 from "../../../../assets/school_icons/43.png";
import Picture44 from "../../../../assets/school_icons/44.png";
import Picture45 from "../../../../assets/school_icons/45.png";
import Picture46 from "../../../../assets/school_icons/46.png";
import Picture47 from "../../../../assets/school_icons/47.png";
import Picture48 from "../../../../assets/school_icons/48.png";
import Picture49 from "../../../../assets/school_icons/49.png";
import Picture50 from "../../../../assets/school_icons/50.png";
import ContentCard from "../../../../components/ContentCard";
import TruncatedContainer from "../../../../components/TruncatedContainer";

interface Create2Props {
    setSelectedImg: (img:string)=>void,
    selectedImg: string;
    schoolName: string;
}

const Create2:React.FC<Create2Props> = ({setSelectedImg, selectedImg, schoolName}) => {
    const cards = [
        Picture1, Picture2, Picture3, Picture4, Picture5, Picture6, Picture7, Picture8, Picture9, Picture10, Picture11, Picture12, Picture13, Picture14, Picture15, Picture16, Picture17, Picture18, Picture19, Picture20, Picture21, Picture22,
        Picture23, Picture24, Picture25, Picture26, Picture27, Picture28, Picture29, Picture30, Picture31, Picture32, Picture33, Picture34, Picture35, Picture36, Picture37, Picture38, Picture39, Picture40, Picture41, Picture42, Picture43, Picture44, Picture45,
        Picture46, Picture47, Picture48, Picture49, Picture50,
    ];


    function handleSelectPic(img:string) {
        setSelectedImg(img);
    }

    return (
        <TruncatedContainer title="Criar" className="create-school-container">
            <div className="create-school-content">
                <h1>Escolha um icone</h1>
                <div className="icons-container">
                    <div className="scroll-view">
                        <div>
                            <div className="icons-content">
                                {cards.map((Card, ind) => (
                                    <img
                                        key={ind}
                                        style={{cursor: 'pointer'}}
                                        src={Card}
                                        height={100}
                                        onClick={() => handleSelectPic(Card)}
                                    />
                                ))}
                            </div>
                            <span>
                                Ícones feitos por <a href="https://www.flaticon.com/br/autores/dighital" title="Dighital" target="_blank">Dighital</a> de <a href="https://www.flaticon.com/br/" title="Flaticon" target="_blank"> www.flaticon.com</a>
                            </span>
                        </div>
                    </div>
                    <div className="icon-description">
                        <ContentCard
                            text={schoolName}
                            color="#F68237"
                            title=""
                            img={selectedImg}
                        />
                    </div>
                </div>
            </div>
        </TruncatedContainer>
    );
}

export default Create2;
