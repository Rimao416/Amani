import React, { useState } from "react";
// import monImage from "../assets/images/map.png";
// import africa from "../assets/images/h1_img1.png";
import smile from "../assets/images/smile_6.png";
import about_1 from "../assets/images/about_1.jpg";
import about_2 from "../assets/images/about_2.jpg";
import about_3 from "../assets/images/about_3.jpg";

import logo from "../assets/images/logo_amani_s.png";
import { Link } from "react-router-dom";

import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";

function Accueil() {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <section className="header">
        <div className="header__navigation">
          <div className="header__navigation--left">
            <img className="header__navigation--logo" src={logo} alt="" />
          </div>

          <span
            className={`header__navigation--toggle ${
              isClicked ? "active" : ""
            }`}
            onClick={handleClick}
          >
            {isClicked ? <RxCross2 /> : <GiHamburgerMenu />}
          </span>

          <ul
            className={`header__navigation--list ${isClicked ? "active" : ""}`}
          >
            <li className="header__navigation-item">
              {" "}
              <Link to="#">Accueil</Link>{" "}
            </li>
            <li className="header__navigation-item">
              {" "}
              <Link to="#">A Propos</Link>{" "}
            </li>
            <li className="header__navigation-item">
              {" "}
              <Link to="#">Cause</Link>{" "}
            </li>
            <li className="header__navigation-item">
              <Link to="#">Activités</Link>{" "}
            </li>
            <li className="header__navigation-item">
              {" "}
              <Link to="#">Contact</Link>{" "}
            </li>
          </ul>
          <p className="header__navigation--invisible"></p>
        </div>
        <div className="header__body">
          <div className="header__body--left">
            <h1 className="header__body--left--title">
              Éradiquer l'analphabétisme chez la jeune femme
            </h1>

            <p className="header__body--left--sub-title">
              Nourriture <span className="header__body--left--span">+</span>{" "}
              éducation <span className="header__body--left--span">+</span>{" "}
              femme
            </p>

            <button className="header__body--left--button">Faire un don</button>
          </div>
          <div className="header__body--right">
            <span class="header__body--right--img">
              <img class src={smile} alt="" />
            </span>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="about__left">
          <img src={about_1} alt="Gallerie 1" className="about__image--1" />
          <img src={about_2} alt="Gallerie 2" className="about__image--2" />
          <img src={about_3} alt="Gallerie 3" className="about__image--3" />
        </div>
        <div className="about__right">
          <h1 className="about__right--title">À propos</h1>
          <div className="about__right--wrapper">
          <h1>Ce que nous sommes</h1>

          <p className="about__right--paragraph"> Nous nous engageons à éradiquer l'analphabétisme chez les jeunes femmes. Nous croyons que chaque femme mérite l'accès à l'éducation et à l'alphabétisation, car cela ouvre des portes vers l'autonomie, la liberté et l'émancipation.</p>
          <p className="about__right--paragraph">  Nous travaillons sans relâche pour créer des programmes éducatifs spécialement conçus pour répondre aux besoins des jeunes femmes qui n'ont pas eu la chance d'acquérir une éducation de base. Nous nous efforçons de fournir des ressources éducatives de qualité, des formations professionnelles et un soutien global pour permettre à ces femmes de se réaliser pleinement.</p>
          <p className="about__right--paragraph"> À travers des partenariats avec des communautés locales, des établissements scolaires et des organisations non gouvernementales, nous mettons en place des centres d'apprentissage et des programmes d'alphabétisation adaptés aux besoins spécifiques des jeunes femmes. Nous favorisons également l'autonomisation en encourageant la participation active des femmes dans la prise de décision et en renforçant leur confiance en elles.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Accueil;
