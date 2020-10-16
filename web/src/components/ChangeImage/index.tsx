import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import api from "../../services/api";

import Picture1 from "../../assets/user_icons/1.png";
import Picture2 from "../../assets/user_icons/2.png";
import Picture3 from "../../assets/user_icons/3.png";
import Picture4 from "../../assets/user_icons/4.png";
import Picture5 from "../../assets/user_icons/5.png";
import Picture6 from "../../assets/user_icons/6.png";
import Picture7 from "../../assets/user_icons/7.png";
import Picture8 from "../../assets/user_icons/8.png";
import Picture9 from "../../assets/user_icons/9.png";
import Picture10 from "../../assets/user_icons/10.png";
import Picture11 from "../../assets/user_icons/11.png";
import Picture12 from "../../assets/user_icons/12.png";
import Picture13 from "../../assets/user_icons/13.png";
import Picture14 from "../../assets/user_icons/14.png";
import Picture15 from "../../assets/user_icons/15.png";
import Picture16 from "../../assets/user_icons/16.png";
import Picture17 from "../../assets/user_icons/17.png";
import Picture18 from "../../assets/user_icons/18.png";
import Picture19 from "../../assets/user_icons/19.png";
import Picture20 from "../../assets/user_icons/20.png";
import Picture21 from "../../assets/user_icons/21.png";
import Picture22 from "../../assets/user_icons/22.png";
import Picture23 from "../../assets/user_icons/32.png";
import Picture24 from "../../assets/user_icons/24.png";
import Picture25 from "../../assets/user_icons/25.png";
import Picture26 from "../../assets/user_icons/26.png";
import Picture27 from "../../assets/user_icons/27.png";
import Picture28 from "../../assets/user_icons/28.png";
import Picture29 from "../../assets/user_icons/29.png";
import Picture30 from "../../assets/user_icons/30.png";
import Picture31 from "../../assets/user_icons/31.png";
import Picture32 from "../../assets/user_icons/32.png";
import Picture33 from "../../assets/user_icons/33.png";
import Picture34 from "../../assets/user_icons/34.png";
import Picture35 from "../../assets/user_icons/35.png";
import Picture36 from "../../assets/user_icons/36.png";
import Picture37 from "../../assets/user_icons/37.png";
import Picture38 from "../../assets/user_icons/38.png";
import Picture39 from "../../assets/user_icons/39.png";
import Picture40 from "../../assets/user_icons/40.png";
import Picture41 from "../../assets/user_icons/41.png";
import Picture42 from "../../assets/user_icons/42.png";
import Picture43 from "../../assets/user_icons/43.png";
import Picture44 from "../../assets/user_icons/44.png";
import Picture45 from "../../assets/user_icons/45.png";
import Picture46 from "../../assets/user_icons/46.png";
import Picture47 from "../../assets/user_icons/47.png";
import Picture48 from "../../assets/user_icons/48.png";
import Picture49 from "../../assets/user_icons/49.png";
import Picture50 from "../../assets/user_icons/50.png";

import "./styles.css";

interface ChangeImageProps {
    active: boolean;
    setActive: Function;
}

const ChangeImage: React.FC<ChangeImageProps> = ({ active, setActive }) => {
    const [delayedActive, setDelayedActive] = useState(false);

    useEffect(() => {
      setTimeout(() => setDelayedActive(active), 300);
    }, [active])

    const cards = [
      Picture1, Picture2, Picture3, Picture4, Picture5, Picture6, Picture7, Picture8, Picture9, Picture10, Picture11, Picture12, Picture13, Picture14, Picture15, Picture16, Picture17, Picture18, Picture19, Picture20, Picture21, Picture22,
      Picture23, Picture24, Picture25, Picture26, Picture27, Picture28, Picture29, Picture30, Picture31, Picture32, Picture33, Picture34, Picture35, Picture36, Picture37, Picture38, Picture39, Picture40, Picture41, Picture42, Picture43, Picture44, Picture45,
      Picture46, Picture47, Picture48, Picture49, Picture50,
    ];

    async function handleSelectPic(card: any) {
      await api.put('/users', {
        icon: card
      });
      localStorage.setItem('icon', card);
      setActive(false);
    }

    return (
        <CSSTransition
            in={active}
            timeout={300}
            classNames="slide"
            style={{
                display: active ? "flex" : delayedActive ? "flex" : "none",
            }}
        >
            <div className="global-change-image-modal">
                <div className="blur" onClick={() => setActive(false)}></div>
                <div className="change-image-content">

                  <div className="scroll-view">
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
                </div>
        </CSSTransition>
    );
};

export default ChangeImage;
