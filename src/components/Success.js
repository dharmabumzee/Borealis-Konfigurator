import React from "react";

const Success = ({
  setOpenModal,
  setPageNumber,
  setDiscount,
  setVehicle,
  setVehicleChecked,
  setName,
  setEmail,
  setPhone,
  setComment,
  setCheckedItems,
  setValidCouponEntered,
  setSubtotal,
  coupon,
  setCoupon,
  couponVerified,
  setCouponVerified,
}) => {
  const handleClick = () => {
    setOpenModal(false);
    setPageNumber(0);
    setDiscount(0);
    setVehicle(null);
    setVehicleChecked(null);
    setName("");
    setEmail("");
    setPhone("");
    setComment("");
    setCheckedItems([]);
    setValidCouponEntered(false);
    setSubtotal(0);
    setCoupon("");
    setCouponVerified(false);
  };

  return (
    <div className="ui center aligned basic segment">
      <h3>
        Vaša prijava je uspješno poslana!{" "}
        <i
          className="check circle outline icon"
          style={{ fontSize: "2rem", color: "#22b946" }}
        ></i>
      </h3>

      <p className="success-content">
        Vaša prijava je uspješno poslana i zaprimljena. Kontaktirati ćemo Vas u
        najkraćem mogućem roku. Hvala Vam!
      </p>
      <button className="ui button" onClick={handleClick}>
        Zatvori
      </button>
    </div>
  );
};

export default Success;
