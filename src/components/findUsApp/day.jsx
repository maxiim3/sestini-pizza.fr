import React from 'react';
import {NavLink} from "react-router-dom";

const Day = ({day, onChange}) => {
    const {_id, jour} = day

    return (
        <li key={_id} className="nav-item">
            <NavLink className="nav-link" onClick={() => onChange(day)} aria-current="page" to={`/nous-trouver?jour=${jour}&?id=${_id}`}>{jour}</NavLink>
        </li>
    );
};

export default Day;
