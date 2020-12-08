import React from "react";

export const Services = ({
  services,
  Checkbox,
  handleChange,
  checkedItems,
}) => {
  return (
    <div
      className="content-services"
      style={{ marginTop: "50px", marginBottom: "150px" }}
    >
      {services.map((service) => (
        <div
          key={service.id}
          // className="ui checkbox"
          style={{ marginBottom: "15px" }}
        >
          <label key={service.key}>
            <Checkbox
              name={service.name}
              checked={checkedItems[service.name]}
              onChange={handleChange}
              price={Number(service.price)}
            />
            {service.name} ({Math.trunc(service.price)} kn)
          </label>
        </div>
      ))}
    </div>
  );
};
