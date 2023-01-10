import React from 'react'

// components
import Header from '../components/Header/Header';

import "./HomePage.css"
import myPhoto from "./../img/myPhoto.png"
import HTMLSkillCard from '../components/UI/SkillsCard/LanguagesSkills/HTMLSkillCard/HTMLSkillCard';
import CSSSkillCard from '../components/UI/SkillsCard/LanguagesSkills/CSSSkillCard/CSSSkillCard';
import JavaScriptSkillCard from '../components/UI/SkillsCard/LanguagesSkills/JavaScriptSkillCard/JavaScriptSkillCard';
import ReactSkillCard from '../components/UI/SkillsCard/FrontEndSkills/ReactSkillCard/ReactSkillCard';
import BootstrapSkillCard from './../components/UI/SkillsCard/FrontEndSkills/BootstrapSkillCard/BootstrapSkillCard';
import TailwindCSSSkillCard from '../components/UI/SkillsCard/FrontEndSkills/TailwindCSSSkillCard/TailwindCSSSkillCard';
import SassSkillCard from '../components/UI/SkillsCard/LanguagesSkills/SASSSkillCard/SassSkillCard';
import TypeScriptSkillCard from '../components/UI/SkillsCard/LanguagesSkills/TypeScriptSkillCard/TypeScriptSkillCard';
import FigmaSkillCard from '../components/UI/SkillsCard/InterfaceDesignSkills/Figma/FigmaSkillCard';
import BlenderSkillCard from '../components/UI/SkillsCard/OtherPrograms/BlenderSkillCard/BlenderSkillCard';
import CanvaSkillCard from '../components/UI/SkillsCard/OtherPrograms/CanvaSkillCard/CanvaSkillCard';
import CapCutSkillCard from '../components/UI/SkillsCard/OtherPrograms/CapCutSkillCard/CapCutSkillCard';
import PhotoshopSkillCard from '../components/UI/SkillsCard/OtherPrograms/PhotoshopSkillCard/PhotoshopSkillCard';
import GitSkillCard from '../components/UI/SkillsCard/OtherPrograms/GitSkillCard/GitSkillCard';
import PHPMASkillCard from '../components/UI/SkillsCard/OtherPrograms/PHPMyAdminSkillCard/PHPMASkillCard';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main className="section">
         <div className="container">
            <section className="wrapper">
               <div className="flex-row main-card">
                  <div className="about-content__img">
                     <img src={myPhoto} alt="" />
                  </div>
                  <div className="about-content__text">
                     <h2 className="title-2">About Me</h2>
                     <p>I'm Vladislav Mosenkov, a 27-year-old Front-end developer.</p>
                     <p>I like to resolve design problems, create smart user interface and imagine useful interaction, developing rich web experiences and web applications.</p>
                     <p>At one of the last places of work, I created a database with/Knowledge base/Corporate website on CMS Wordpress for employees because it was painful to watch how they work in cloud storage.</p>
                     <p>Installed the Open Server Panel, installed the website.</p>
                     <p>Has been implemented:</p>
                     <ul>
                        <li className="list-disc">News posts for each department.</li>
                        <li className="list-disc">The script of the dialogue with the client.</li>
                        <li className="list-disc">Who is who in the company, etc.</li>
                     </ul>
                     <p>During the creation process, I realized that it was necessary to study JavaScript more and began to immerse myself more in the world of frontend development.</p>
                     <p>Прошел самостоятельно курсы Frontend Developer от компании Glo Academy (04.21 - 10.22).</p>
                     <ul>
                        <li className="list-disc">Wordpress для верстальщика</li>
                        <li className="list-disc">Javascript для верстальщика</li>
                        <li className="list-disc">Базовый JavaScript</li>
                        <li className="list-disc">Веб-разработчик 12.0</li>
                     </ul>
                     <p>После начал заниматься с ментором по изучению React.</p>
                     <p>Так же имею опыт в реализации Backend части приложения на стеке React, PHP, Laravel и MySql.</p>

                  </div>
               </div>
            </section>
            <section className="empty-block"></section>
            <section className="wrapper">
               <h2 className="title-2">Technical Skills</h2>
               <div className="main-card">
                  <div className="skills-text">
                     <h2 className="title-2">Tools</h2>
                        <p>Использую Windows 10 и Ubuntu в качестве рабочей ОС. Есть опыт использования Figma, Avocode и Zeplin для работы с дизайн-макетами. Использую редактор Visual Studio Code с плагинами Prettier и ESLint для автоматического форматирования и проверки кода.</p>
                  </div>
               </div>
               <div className="main-card">
                  <div className="skills-text">
                     <h2 className="title-2">Frontend skills</h2>
                     <h2 className="skills-subtitle">Languages</h2>
                     <ul className="skills-row">
                        <HTMLSkillCard/>
                        <CSSSkillCard />
                        <SassSkillCard />
                        <JavaScriptSkillCard />
                        <TypeScriptSkillCard />
                     </ul>
                     <h2 className="skills-subtitle">Frameworks</h2>
                     <ul className="skills-row">
                        <BootstrapSkillCard />
                        <TailwindCSSSkillCard />
                     </ul>
                     <h2 className="skills-subtitle">Libraries</h2>
                     <ul className="skills-row">
                        <ReactSkillCard />
                     </ul>
                     <h2 className="skills-subtitle">Other</h2>
                     <ul className="skills-row">
                        <div>Gulp</div>
                        <div>Webpack</div>
                     </ul>
                  </div>{/* 
                  <div className="divider">
                     <div className="divider-line"></div>
                  </div>
                  <div className="skills-text">
                     <h2 className="title-2">Backend skills</h2>
                     <div>soon</div>
                  </div> */}
               </div>
            </section>
            <section className="empty-block"></section>
            <section className="wrapper">
               <div className="main-card">
                  <div className="skills-text">
                  <h2 className="title-2">Programs/Web Application</h2>
                     <ul className="skills-row">
                        <div>VS code</div>
                        <div>Wordpress</div>
                        <GitSkillCard />
                        <PHPMASkillCard />
                     </ul>
                  </div>
               </div>
            </section>
            <section className="empty-block"></section>
            <section className="wrapper">
               <div className="main-card">
                  <div className="skills-text">
                     <h2 className="title-2">Graphic redactors</h2>
                     <ul className="skills-row">
                        <FigmaSkillCard />
                        <CanvaSkillCard />
                        <PhotoshopSkillCard />
                        <CapCutSkillCard />
                     </ul>
                  </div>
               </div>
            </section>
            <section className="empty-block"></section>
            <section className="wrapper">
               <div className="main-card">
                  <div className="skills-text">
                     <h2 className="title-2">3D</h2>
                     <ul className="skills-row">
                        <BlenderSkillCard />
                     </ul>
                  </div>
               </div>
            </section>
         </div>
      </main>
    </div>
  )
}

export default HomePage