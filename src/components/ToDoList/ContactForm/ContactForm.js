import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const ContactForm = ({ addContacts }) => {
  const inputText = document.querySelectorAll("input[type='text']");
  const [contact, setContact] = useState({
    id: "",
    nameContact: "",
    number: "",
  });
  const addContact = () => {
    if (contact.nameContact !== "" && contact.number !== "") {
      addContacts((contact.id = uuidv4()), contact.nameContact, contact.number);
      setContact({ id: "", nameContact: "", number: "" });
      for (let i = 0; i < inputText.length; i++) {
        inputText[i].value = "";
      }
    } else {
      alert("Пожалуйста введите все данные в поля формы");
    }
  };
  return (
    <>
      <label>Input name</label>
      <br />
      <input
        type="text"
        name="nameContact"
        onChange={(event) => {
          setContact((contact) => ({
            ...contact,
            [event.target.name]: event.target.value,
          }));
        }}
      ></input>
      <br />
      <label>Input number</label>
      <br />
      <input
        type="text"
        name="number"
        onChange={(event) => {
          setContact((contact) => ({
            ...contact,
            [event.target.name]: event.target.value,
          }));
        }}
      ></input>
      <br />
      <button type="button" onClick={addContact}>
        Добавить контакт
      </button>
    </>
  );
};

export default ContactForm;
ContactForm.propTypes = {
  addContacts: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
};
