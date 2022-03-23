import React from "react";

export const Button = ({text, onClick, key, icon, activeClass}) => {

    return (
        <div key={key} className={`button ${activeClass}`} onClick={onClick}>
            <p>{text.toUpperCase()}</p>
            {icon}
        </div>
    );
};
