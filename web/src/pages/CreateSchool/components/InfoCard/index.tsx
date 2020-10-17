import React from "react";

import { KaClose } from "../../../../assets/icons";
import "./styles.css";

interface InfoCardProps extends React.HTMLAttributes<HTMLDivElement> {
    handleDelete?: Function;
    id: string;
    title: string;
    style?: Object;
    isDragging?: any;
    numContent?: number;
    setNumContent?: Function
}

const InfoCard: React.FC<InfoCardProps> = ({
    handleDelete,
    id,
    title,
    style,
    isDragging,
    numContent,
    setNumContent,
    ...rest
}) => {
    return (
        <div key={id} className="creation-card" style={style} {...rest}>
            <label
                style={{
                    background: isDragging
                        ? "var(--color-background-selected)"
                        : "var(--color-background)",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <span>{title}</span>
                {(()=> {
                    if(numContent && setNumContent) return (
                        <input 
                            style={{display: 'block', width: '30px', background: 'none', border: 'none'}} 
                            value={numContent}
                            placeholder="1"
                            onChange={e => setNumContent(e.target.value, id)}
                            type="number"
                            min="1"
                            max="19"
                        />
                    )
                })()}

            </label>

            {(() => {
                if (handleDelete) {
                    return (
                        <button
                            onClick={() => handleDelete(id)}
                            style={{ display: isDragging ? "none" : "flex" }}
                        >
                            <KaClose />
                        </button>
                    );
                }
            })()}
        </div>
    );
};

export default InfoCard;
