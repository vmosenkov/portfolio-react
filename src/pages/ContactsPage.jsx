import React, {useState} from 'react';

import { AiOutlineMail } from "react-icons/ai";
import MyButton from '../components/UI/Buttons/MyButton/MyButton';
import ModalMail from '../components/UI/Modal/ModalMail/ModalMail';
import cl from'../components/UI/Buttons/MyButton/myButton.module.scss';

const ContactsPage = () => {

   const [isOpen, setIsOpen] = useState(false);

   return (
      <main className="section">
         <div className="container">
            <h1 className="title-1 theme__color">Contacts</h1>

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
                     <h2 className="title-2">Email</h2>
                     <p><a href="mailto:vmosenkov.work@gmail.com" rel="noreferrer" target="_blank">vmosenkov.work@gmail.com</a></p>
                  </li>
                  <li className="content-list__item">
                     <h2 className="title-2">Got something for me?</h2>
                     <MyButton className={cl.btn__modal_email} onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <AiOutlineMail size={24} />Send message
                     </MyButton>
                     {isOpen && <ModalMail setIsOpen={setIsOpen}></ModalMail>}
                  </li>
            </ul>
            
         </div>
      </main>
   )
}

export default ContactsPage