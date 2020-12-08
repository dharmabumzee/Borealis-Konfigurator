import React from "react";

export const ContactField = ({
  title,
  placeholder,
  tag,
  required,
  onChange,
  value,
}) => {
  const typeOfInputField =
    tag === "input" ? (
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    ) : (
      <textarea spellCheck="false" value={value} onChange={onChange}>
        {placeholder}
      </textarea>
    );

  const isRequired = required ? "required" : "";

  return (
    <>
      <div className={`${isRequired} field`} onChange={onChange}>
        <label>{title}</label>
        {typeOfInputField}
      </div>
    </>
  );
};

export default ContactField;
