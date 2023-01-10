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
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum qui a esse impedit tenetur? Tempora velit aliquid reiciendis rerum consectetur molestiae? Nulla necessitatibus obcaecati vero perferendis eaque quod dignissimos deleniti.</p>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni asperiores deleniti, hic non aperiam ea neque laboriosam, laborum, soluta quis natus unde harum quae. Dolore quas aliquam maiores perferendis natus?</p>
                  </div>
               </div>
            </section>
            <section className="empty-block"></section>
            <section className="wrapper">
               <h2 className="title-2">Technical Skills</h2>
               <div className="main-card">
                  <div className="skills-text">
                     <h2 className="title-2">Frontend skills</h2>
                     <h2 className="skills-subtitle">Languages</h2>
                     <ul className="skills-row">
                        <HTMLSkillCard />
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