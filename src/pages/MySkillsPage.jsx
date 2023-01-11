import React from 'react';

// components
import HTMLSkillCard          from '../components/UI/SkillsCard/LanguagesSkills/HTMLSkillCard/HTMLSkillCard';
import CSSSkillCard           from '../components/UI/SkillsCard/LanguagesSkills/CSSSkillCard/CSSSkillCard';
import JavaScriptSkillCard    from '../components/UI/SkillsCard/LanguagesSkills/JavaScriptSkillCard/JavaScriptSkillCard';
import ReactSkillCard         from '../components/UI/SkillsCard/FrontEndSkills/ReactSkillCard/ReactSkillCard';
import BootstrapSkillCard     from './../components/UI/SkillsCard/FrontEndSkills/BootstrapSkillCard/BootstrapSkillCard';
import TailwindCSSSkillCard   from '../components/UI/SkillsCard/FrontEndSkills/TailwindCSSSkillCard/TailwindCSSSkillCard';
import SassSkillCard          from '../components/UI/SkillsCard/LanguagesSkills/SASSSkillCard/SassSkillCard';
import TypeScriptSkillCard    from '../components/UI/SkillsCard/LanguagesSkills/TypeScriptSkillCard/TypeScriptSkillCard';
import FigmaSkillCard         from '../components/UI/SkillsCard/InterfaceDesignSkills/Figma/FigmaSkillCard';
import BlenderSkillCard       from '../components/UI/SkillsCard/OtherPrograms/BlenderSkillCard/BlenderSkillCard';
import CanvaSkillCard         from '../components/UI/SkillsCard/OtherPrograms/CanvaSkillCard/CanvaSkillCard';
import CapCutSkillCard        from '../components/UI/SkillsCard/OtherPrograms/CapCutSkillCard/CapCutSkillCard';
import PhotoshopSkillCard     from '../components/UI/SkillsCard/OtherPrograms/PhotoshopSkillCard/PhotoshopSkillCard';
import GitSkillCard           from '../components/UI/SkillsCard/OtherPrograms/GitSkillCard/GitSkillCard';
import PHPMASkillCard         from '../components/UI/SkillsCard/OtherPrograms/PHPMyAdminSkillCard/PHPMASkillCard';

// Styles
import "./AllPage.css"

const MySkillsPage = () => {

   return (
      <main className="section">
      <div className="container">
         {/* Technical Skills */}
         <section className="empty-block"></section>
         <section className="wrapper">
            <div className="skills-text">
               <h2 className="title-2">Technical Skills</h2>
            </div>
         </section>
         {/* Tools */}
         <section className="empty-block"></section>
         <section className="wrapper">
            <div className="main-card">
               <div className="skills-text">
                  <h2 className="title-2">Tools</h2>
               <p>Использую Windows 10 и Ubuntu в качестве рабочей ОС. Есть опыт использования Figma, Avocode и Zeplin для работы с дизайн-макетами. Использую редактор Visual Studio Code с плагинами Prettier и ESLint для автоматического форматирования и проверки кода.</p>
               </div>
            </div>
         </section>
         {/* Frontend skills */}
         <section className="empty-block"></section>
         <section className="wrapper">
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
         {/* Programs/Web Application */}
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
         {/* Graphic redactors */}
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
         {/* 3D */}
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
   )
}

export default MySkillsPage