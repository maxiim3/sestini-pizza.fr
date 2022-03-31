import React, { useEffect, useState } from "react";
import Day from "./day";
import { getDays } from "./jours";
import { IconHandClick, IconTitleLaCarte } from "../commons/icons";
import { RenderButtons } from "../laCarte/categorySection/renderButtons";
import { Button } from "../commons/button";

export const NousTrouver = ({ location }) => {
  const index = new Date().getDay() - 1;
  const defaultDay = getDays()[index];
  const [activeDay, setActiveDay] = useState(defaultDay);

  const stateChange = (compare, isTrue, isFalse) => {
    return activeDay === compare ? isTrue : isFalse;
  };

  const handleDayChange = (day) => {
    const ouverture = [...getDays()];
    setActiveDay(ouverture.filter((j) => j._id === day._id)[0]);
  };
  const getActiveDay = (key) => {
    return activeDay[key];
  };
  return (
    <main className={"nousTrouver-page"}>
      <aside>
        <h1 className={"pageTitle"}>Nos Emplacements</h1>
        <span className="iconTitle">
          <IconTitleLaCarte />
        </span>
      </aside>
      <section className="nousTrouver-page categories">
        <div className="nousTrouver-page app-sub-title">
          <h2>Horaires</h2>
        </div>
        <div>
          <p className={"text-large text-align-center"}>Nous sommes ouverts</p>
          <p className={"text-large text-align-center"}>de 18h à 21h30</p>
          <p className={"text-large text-align-center"}>du mardi au samedi</p>
        </div>
        <div className={'horloge'}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 3C12.3082 3 15 5.69175 15 9C15 12.3082 12.3082 15 9 15C5.69175 15 3 12.3082 3 9C3 5.69175 5.69175 3 9 3ZM9 1.5C4.85775 1.5 1.5 4.85775 1.5 9C1.5 13.1422 4.85775 16.5 9 16.5C13.1422 16.5 16.5 13.1422 16.5 9C16.5 4.85775 13.1422 1.5 9 1.5ZM11.85 11.55L9.75 8.75025V5.25H8.25V9.24975L10.65 12.4492L11.85 11.55V11.55Z" fill="#303636"/>
          </svg>
        </div>
        <div>
          <p className={"text-small text-align-center"}>
            Sélectionnez un jour pour visualiser sur la carte nos emplacements
          </p>
        </div>
      </section>

      <div className="buttons">
        {getDays().filter(j => j._id !== 0 && j._id !== 6).map((j) => (
          <Button
            key={j._id}
            onClick={() => handleDayChange(j)}
            text={`${j.jour}`}
            activeClass={stateChange(j.jour, "btn-active", "")}
          />
        ))}
      </div>
      <section className="app-main">
        {getActiveDay("estOuvert") ? (
          <div className="NousTrouver--app-sub-title">
            <h2>Nous sommes ouvert le {getActiveDay("jour")}</h2>
            <h3>{getActiveDay("horaires")}</h3>
            <div className={"products"}>
              <p className={"text-small text-align-center"}>
                Cliquez sur la carte pour ouvrir dans Google Maps
              </p>
              <img
                src={getActiveDay("url")}
                alt="Carte de notre position"
              />
            </div>
          </div>
        ) : (
          <h2>Nous sommes fermés le {getActiveDay("jour")}</h2>
        )}
      </section>
    </main>
  );
};
