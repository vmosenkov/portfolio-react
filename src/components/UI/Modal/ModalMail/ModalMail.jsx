import React, { useState } from "react";

import { useSpring, animated } from '@react-spring/web'
import "./modal.scss";
import emailjs from "@emailjs/browser";
import { AiOutlineMail } from "react-icons/ai";

const ModalMail = ({ setIsOpen }) => {
   const [values, setValues] = useState({ user_name: "", user_email: "", user_message: "" });

   const closeButton = (e) => {
      e.stopPropagation();
      setIsOpen(false);
   };

   const outsideClick = (e) => {
      if (e.target.className === "modal__back") {
         setIsOpen(false);
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      emailjs.send("service_8weye0p", "template_2lhjs7v", values, "zJoEkG4NtpTdVFL6D")
      .then((result) => {
         setIsOpen(false);
      },
      (error) => {
         console.log(error.text);
         setIsOpen(false);
      });
   };
   
   const springs = useSpring({
      from: { y: -10000 },
      to: { y: 0 },
    })

   return (
      <div
         className="modal__back"
         onClick={(e) => {
         outsideClick(e);
         }}>

         <animated.form className="modal__wrapper" onSubmit={handleSubmit} style={{...springs,}}>
            <div
               className="modal__close-btn"
               onClick={(e) => {
               closeButton(e);
               }}>
            X
            </div>
            <div className="modal__header">
               <h1>Let’s talk.</h1>
               <span>Write me your message...</span>
            </div>
            <div className="modal__inputs">
               <input
                  className="custom-input"
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={(e) => setValues({ ...values, user_name: e.target.value })}
               />
               <input
                  className="custom-input"
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={(e) => setValues({ ...values, user_email: e.target.value })}
               />
               <textarea
                  className="custom-textarea "
                  placeholder="Message"
                  name="message"
                  onChange={(e) => setValues({ ...values, user_message: e.target.value })}
               />
            </div>
            <div className="modal__button">
               <button className="send-btn">
                  <AiOutlineMail size={24} />Send message
               </button>
            </div>
         </animated.form>
      </div>
   );
};

export default ModalMail;
