import React from 'react'

// components
import myPhoto from "./../img/myPhoto.png"

// Styles
import "./allPage.scss"

function AboutMe() {
  return (
    <div>
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
         </div>
      </main>
    </div>
  )
}

export default AboutMe