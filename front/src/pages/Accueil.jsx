import React, { useState, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import causes_img from "../assets/images/causes_img.png";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoGooglePlus,
  BiLogoInstagram,
} from "react-icons/bi";

// Import Swiper styles
import { Navigation } from "swiper/modules";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
import "swiper/css";

import responsability from "../assets/icones/responsability.png";
import donation from "../assets/icones/donation.png";
import hug from "../assets/icones/hug.png";
import community from "../assets/icones/community.png";
import smile from "../assets/images/smile_6.png";
import about_1 from "../assets/images/about_1.jpg";
import about_2 from "../assets/images/about_2.jpg";
import about_3 from "../assets/images/about_3.jpg";
import goal_1 from "../assets/images/Goal_1.jpg";
import goal_2 from "../assets/images/Goal_4.jpg";
import africa from "../assets/images/africa.png";
import contact from "../assets/images/contact.png"

import logo from "../assets/images/logo_amani_s.png";
import { Link } from "react-router-dom";

import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import Title from "../components/Title";
import ContentLayout from "../layouts/ContentLayout";
import CauseCard from "../components/CauseCard";
import Testimonials from "../components/Testimonials";
import testimonials from "../assets/data";

function Accueil() {
  const swiperRef = useRef();
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <section className="header">
        <div className="header__navigation">
        <span
            className={`header__navigation--toggle ${
              isClicked ? "active" : ""
            }`}
            onClick={handleClick}
          >
            {/* {isClicked ? <RxCross2 /> : <GiHamburgerMenu />} */}
          </span>
          <div className="header__navigation--left">
            <img className="header__navigation--logo" src={logo} alt="" />
          </div>

          

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
            <span className="header__body--right--img">
              <img className src={smile} alt="" />
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
            <Title title="Ce que nous sommes" />
            <ContentLayout title="Ce que nous sommes">
              <p className="layout__paragraph">
                {" "}
                Nous nous engageons à éradiquer l'analphabétisme chez les jeunes
                femmes. Nous croyons que chaque femme mérite l'accès à
                l'éducation et à l'alphabétisation, car cela ouvre des portes
                vers l'autonomie, la liberté et l'émancipation.
              </p>
              <p className="layout__paragraph">
                {" "}
                Nous travaillons sans relâche pour créer des programmes
                éducatifs spécialement conçus pour répondre aux besoins des
                jeunes femmes qui n'ont pas eu la chance d'acquérir une
                éducation de base.
              </p>
              <p className="layout__paragraph">
                {" "}
                À travers des partenariats avec des communautés locales, des
                établissements scolaires et des organisations non
                gouvernementales, nous mettons en place des centres
                d'apprentissage et des programmes d'alphabétisation adaptés aux
                besoins spécifiques des jeunes femmes.
              </p>

              <button className="layout__button">Voir plus sur nous</button>
            </ContentLayout>
          </div>
        </div>
      </section>
      <section className="goal">
        <img src={causes_img} className="goal__image" alt="" />
        <div className="goal__left">
          <ContentLayout titre="Changer le monde, une jeune femme à la fois">
            <p className="layout__paragraph">
              Nous croyons en un monde où chaque femme a le droit fondamental
              d'apprendre à lire, à écrire et à acquérir les compétences
              nécessaires pour s'épanouir dans la vie. Malheureusement, de
              nombreuses jeunes femmes sont privées de cette opportunité en
              raison de divers obstacles sociaux, économiques et culturels.
            </p>
            <p className="layout__paragraph">
              Nous ne nous contentons pas d'offrir une simple solution
              éducative. Nous comprenons que l'analphabétisme chez les jeunes
              femmes est souvent lié à des problématiques plus larges telles que
              la discrimination de genre, la pauvreté et les inégalités.
            </p>
            <button className="layout__button">Faire un don</button>
          </ContentLayout>
        </div>
        <div className="goal__right">
          <img
            src={goal_1}
            className="goal__right--img goal__right--img-1"
            alt=""
          />
          <img
            src={goal_2}
            className="goal__right--img goal__right--img-2"
            alt=""
          />
        </div>
      </section>
      <section className="causes">
        <img src={africa} alt="Africa" className="causes__background" />
        <Title title="Notre cause" />
        <div className="causes__box">
          <CauseCard
            image={hug}
            title="Partage"
            text="Partagez des sentiments et des spiritualités avec les pauvres, les enfants du monde entier, en les aidant à s'intégrer dans la communauté."
          />
          <CauseCard
            image={donation}
            title="Dons"
            text="Un don fait par un particulier ou une organisation à une organisation à but non lucratif, une association caritative ou une fondation privée."
          />
          <CauseCard
            image={community}
            title="Communauté"
            text="Nous aidons les organisations à but non lucratif locales à accéder au financement, aux outils, à la formation et au soutien dont elles ont besoin pour devenir plus."
          />
          <CauseCard
            image={responsability}
            title="Responsabilités"
            text="Êtes-vous préoccupé par la santé de notre planète et prêt à faire ce que vous pouvez pour la sauver ?"
          />
        </div>
      </section>
   

      <section className="testimonials">
        <div className="testimonials__background">
          <div className="testimonials__background--left"></div>
          <div className="testimonials__background--right"></div>
        </div>
        <div className="testimonials__wrapper">
          <div className="testimonials__left">
            <Title title="Témoignages" />
            <span className="testimonials__arrow">
              <span
                className="testimonials__arrow--left"
                onClick={() => swiperRef.current.slidePrev()}
              >
                <RiArrowLeftSLine />
              </span>
              <span
                className="testimonials__arrow--right"
                onClick={() => swiperRef.current.slideNext()}
              >
                <RiArrowRightSLine />
              </span>
            </span>
          </div>
          <div className="testimonials__right">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              slidesPerView={2}
              spaceBetween={30}
              autoplay={true}
              loop={true}
              pagination={{
                clickable: true,
              }}
              // navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide>
                  <Testimonials {...testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      
      <section className="footer">
        <div className="footer__wrapper">
          <div className="footer__wrapper--row">
            <img src={logo} className="footer__header" alt="" />
            <div className="footer__social">
              <span className="footer__social--item">
                <BiLogoFacebook />
              </span>
              <span className="footer__social--item">
                <BiLogoTwitter />
              </span>
              <span className="footer__social--item">
                <BiLogoGooglePlus />
              </span>
              <span className="footer__social--item">
                <BiLogoInstagram />
              </span>
            </div>
          </div>
          <div className="footer__wrapper--row">
            <h4 className="footer__header" alt="">
              Contacts
            </h4>
            <ul className="footer__list">
              <li className="footer__item">
                Elliott Ave, Parkville VIC 3052, Melbourne Canada
              </li>
              <li className="footer__item">Phone: +31 85 964 47 25</li>
              <li className="footer__item">Email: support@helpo.org</li>
            </ul>
          </div>
          <div className="footer__wrapper--row">
            <h4 className="footer__header" alt="">
              Menu & Liens
            </h4>
            <ul className="footer__list">
              <li className="footer__item">
                <Link to="#" className="footer__item--link">
                  Accueil
                </Link>
              </li>
              <li className="footer__item">
                <Link to="#" className="footer__item--link">
                  A Propos
                </Link>
              </li>
              <li className="footer__item">
                <Link to="#" className="footer__item--link">
                  Cause
                </Link>
              </li>
              <li className="footer__item">
                <Link to="#" className="footer__item--link">
                  Temoignages
                </Link>
              </li>
              <li className="footer__item">
                <Link to="#" className="footer__item--link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__wrapper--row">
            <h4 className="footer__header" alt="">
              Dons
            </h4>
            <ul className="footer__list">
              <li className="footer__item">
                Help Us Change the Lives of Children in World
              </li>
              <li className="footer__item">
                <button className="footer__item--button">Faire un don</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Amani Foundation By Docovery</p>

          <span>© Tous droits reservés</span>
        </div>
      </section> 
    </>
  );
}

export default Accueil;
