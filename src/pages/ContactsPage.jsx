import React from 'react';

const ContactsPage = () => {
   return (
      <main className="section">
         <div className="container">
            <h1 className="title-1">Contacts</h1>

            <ul className="content-list">
                  <li className="content-list__item">
                     <h2 className="title-2">Location</h2>
                     <p>Saint-Petersburg, Russia</p>
                  </li>
                  <li className="content-list__item">
                     <h2 className="title-2">Telegram</h2>
                     <p><a href="https://t.me/vmosenkov" rel="noreferrer" target="_blank">@vmosenkov</a></p>
                  </li>
                  <li className="content-list__item">
                     <h2 className="title-2">Email</h2>
                     <p><a href="mailto:vladmos1995@gmail.com" rel="noreferrer" target="_blank">vladmos1995@gmail.com</a></p>
                  </li>
            </ul>
         </div>
      </main>
   )
}

export default ContactsPage