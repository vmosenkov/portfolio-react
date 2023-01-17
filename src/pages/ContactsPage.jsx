import React, {useState} from 'react';

import { AiOutlineMail } from "react-icons/ai";
import ModalMail from '../components/UI/Modal/ModalMail/ModalMail';

const ContactsPage = () => {

   const [isOpen, setIsOpen] = useState(false);

   return (
      <main className="section">
         <div className="container">
            <h1 className="title-1">Contacts</h1>

            <ul className="content-list">
                  {/* <li className="content-list__item">
                     <h2 className="title-2">Location</h2>
                     <p>Saint-Petersburg, Russia</p>
                  </li> */}
                  <li className="content-list__item">
                     <h2 className="title-2">Telegram</h2>
                     <p><a href="https://t.me/vmosenkov" rel="noreferrer" target="_blank">@vmosenkov</a></p>
                  </li>
                  <li className="content-list__item">
                     <h2 className="title-2">Linkedin</h2>
                     <p><a href="https://www.linkedin.com/in/vmosenkov/" rel="noreferrer" target="_blank">vmosenkov</a></p>
                  </li>
                  <li className="content-list__item">
                     <AiOutlineMail size={50} />
                     <h2 className="title-2">Email</h2>
                     <p><a href="mailto:vmosenkov.work@gmail.com" rel="noreferrer" target="_blank">vmosenkov.work@gmail.com</a></p>
                  </li>
            </ul>
            <div className="contacts__send">
               <span>Got something for me?</span>
               <button onClick={() => setIsOpen((isOpen) => !isOpen)}>Send message</button>
            </div>
            {isOpen && <ModalMail setIsOpen={setIsOpen}></ModalMail>}
         </div>
      </main>
   )
}

export default ContactsPage