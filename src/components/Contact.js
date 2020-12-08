import React, { useState } from "react";
import ContactField from "./ContactField";

const Contact = ({
  name,
  email,
  phone,
  comment,
  setName,
  setEmail,
  setPhone,
  setComment,
}) => {
  const fields = [
    {
      title: "Ime i prezime",
      placeholder: "Ime i prezime",
      tag: "input",
      required: "required",
    },
    {
      title: "E-mail",
      placeholder: "Email adresa",
      tag: "input",
      required: "required",
    },
    {
      title: "Telefon",
      placeholder: "Broj telefona",
      tag: "input",
      required: "required",
    },
    { title: "Napomena (opcionalno)", placeholder: "", tag: "textarea" },
  ];

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const onCommentChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <div className="contact">
      <h3>Korak 3. Vaši kontakt podaci</h3>
      <div className="ui form">
        {/* {fields.map(({ title, placeholder, tag, required }) => {
          return ( */}

        <ContactField
          title={"Ime i prezime"}
          placeholder={"Ime i prezime"}
          tag={"input"}
          required
          onChange={onNameChange}
          value={name}
        />
        <ContactField
          title={"E-mail"}
          placeholder={"Email adresa"}
          tag={"input"}
          required
          onChange={onEmailChange}
          value={email}
        />
        <ContactField
          title={"Telefon"}
          placeholder={"Broj telefona"}
          tag={"input"}
          required
          onChange={onPhoneChange}
          value={phone}
        />
        <ContactField
          title={"Napomena (opcionalno)"}
          placeholder={""}
          tag={"textarea"}
          onChange={onCommentChange}
          value={comment}
        />
        {/* );
        })} */}
      </div>
    </div>
  );
};

export default Contact;
