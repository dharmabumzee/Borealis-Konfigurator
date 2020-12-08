import React from "react";

const ChooseVehicle = ({
  setVehicle,
  setIsButtonDisabled,
  vehicleChecked,
  setVehicleChecked,
}) => {
  const vehicles = [
    { id: 1, value: "Peugot" },
    { id: 2, value: "Volkswagen" },
    { id: 3, value: "Citroen" },
    { id: 4, value: "Audi" },
    { id: 5, value: "Bmw" },
    { id: 6, value: "Seat" },
    { id: 7, value: "Alfa Romeo" },
    { id: 8, value: "Kia" },
    { id: 9, value: "Hyundai" },
    { id: 10, value: "Honda" },
    { id: 11, value: "Toyota" },
  ];

  const handleOnChange = (e) => {
    setVehicle(e.target.value);
    setVehicleChecked(e.target.id);
    setIsButtonDisabled(false);
  };

  return (
    <div>
      <h3>Korak 1. Odaberite proizvođača vašeg vozila</h3>
      <div className="content-vehicle">
        {vehicles.map(({ id, value }) => {
          return (
            <div key={id} className="ui radio checkbox">
              <input
                type="radio"
                name="vehicle"
                value={value}
                id={id}
                checked={vehicleChecked == id}
                onChange={handleOnChange}
              />
              <label>{value}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseVehicle;
