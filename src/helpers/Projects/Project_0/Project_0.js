import project_01 from "./img/01-big.png";
import project_01_Big from "./img/01-big.png";

// icon
   //icon - frontend
   
   //icon - dependencies
   
   
   
   


// frontend   
import HTMLSkillCard from "../../../components/UI/SkillsCard/LanguagesSkills/HTMLSkillCard/HTMLSkillCard";
import CSSSkillCard from "../../../components/UI/SkillsCard/LanguagesSkills/CSSSkillCard/CSSSkillCard";
import JavaScriptSkillCard from "../../../components/UI/SkillsCard/LanguagesSkills/JavaScriptSkillCard/JavaScriptSkillCard";
import ReactSkillCard from "../../../components/UI/SkillsCard/FrontEndSkills/ReactSkillCard/ReactSkillCard";
import ReactIconSkillCard from "../../../components/UI/SkillsCard/DependenciesSkills/ReactIconSkillCard/ReactIconSkillCard";
import StyledComponentSkillCard from "../../../components/UI/SkillsCard/DependenciesSkills/StyledComponentSkillCard/StyledComponentSkillCard";
import ReactRouterSkillCard from "../../../components/UI/SkillsCard/DependenciesSkills/ReactRouterSkillCard/ReactRouterSkillCard";
import AxiosSkillCard from "../../../components/UI/SkillsCard/DependenciesSkills/AxiosSkillCard/AxiosSkillCard";
import NormalizeSkillCard from "../../../components/UI/SkillsCard/DependenciesSkills/NormalizeSkillCard/NormalizeSkillCard";



   

const project_0 = [
   {
      id:0,
      title: 'REST Countries API',
      category: 'Pet-project.',
      
      description: [
         <div key="description">
            <div className="project-box__title-2">This is a solution to the <a href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca">REST Countries API with color theme switcher</a> challenge on Frontend Mentor.</div>
            <div className="project-box__title-3">The challenge:</div>
            <p>Users should be able to:</p>
            <ul>
               <li className="list-disc">See all countries from the API on the homepage</li>
               <li className="list-disc">Search for a country using an input field</li>
               <li className="list-disc">Filter countries by region</li>
               <li className="list-disc">Click on a country to see more detailed information on a separate page</li>
               <li className="list-disc">Click through to the border countries on the detail page</li>
               <li className="list-disc">Toggle the color scheme between light and dark mode optional</li>
            </ul>
            <div className="project-box__title-3">Built with:</div>
            <ul>
               <li className="list-disc">Semantic HTML5 markup</li>
               <li className="list-disc">CSS custom properties</li>
               <li className="list-disc">Flexbox</li>
               <li className="list-disc">gap grid-gap</li>
               <li className="list-disc">Mobile-first workflow</li>
               <li className="list-disc">React - JS library - v18.1.0</li>
               <li className="list-disc">ReactDOM - The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside the React model if you need to. - v18.1.0</li>
               <li className="list-disc">React Icons - Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using. - v4.4.0</li>
               <li className="list-disc">React Router - React Router is a lightweight, fully-featured routing library for the React JavaScript library. React Router runs everywhere that React runs; on the web, on the server using node.js, and on React Native. - v6.3.0</li>
               <li className="list-disc">[React Router DOM] - The react-router-dom package contains bindings for using React Router in web applications - v5.2.0</li>
               <li className="list-disc">React Select - A flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete, async and creatable support. - v5.3.2</li>
               <li className="list-disc">Styled Components - For styles - v5.3.5</li>
               <li className="list-disc">Axios - Promise based HTTP client for the browser and node.js - "v0.27.2",</li>
               <li className="list-disc">Normalize.css - A modern alternative to CSS resets - v8.0.1"</li>
            </ul>
         </div>
      ],
      skills: {
         skillsFrontend: 
         [
            <HTMLSkillCard key="item-1" />,
            <CSSSkillCard key="item-2" />,
            <JavaScriptSkillCard key="item-3" />,
            <ReactSkillCard key="item-4" />,
         ], 
         /* skillsBackend: */
         skillsDependencies:
         [  
            <ReactIconSkillCard key="item-1" />,
            <StyledComponentSkillCard key="item-2" />,
            <ReactRouterSkillCard key="item-3" />,
            <AxiosSkillCard key="item-4" />,
            <NormalizeSkillCard key="item-5" />,
         ],
      },
      img: project_01,
      imgBig: project_01_Big,
      gitHubLink: 'https://github.com/vmosenkov/countries-flags',
      liveSiteLink: 'https://vmosenkov.github.io/countries-flags/',
   },
   
];

export { project_0 };