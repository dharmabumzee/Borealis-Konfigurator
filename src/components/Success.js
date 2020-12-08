import React from "react";
import { successData } from "../data/data";

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
  setCoupon,
  setCouponVerified,
}) => {
  // on close reset all state
  const handleClick = () => {
    resetModal();
    resetContactForm();
    resetVehicleAndServices();
    resetCouponsAndSubtotal();
  };

  const resetContactForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setComment("");
  };

  const resetVehicleAndServices = () => {
    setVehicle(null);
    setVehicleChecked(null);
    setCheckedItems([]);
  };

  const resetCouponsAndSubtotal = () => {
    setValidCouponEntered(false);
    setDiscount(0);
    setSubtotal(0);
    setCoupon("");
    setCouponVerified(false);
  };

  const resetModal = () => {
    setOpenModal(false);
    setPageNumber(0);
  };

  const { successSubtitle, successMessage, successButton } = successData;

  return (
    <div className="ui center aligned basic segment">
      <h3>
        {successSubtitle}{" "}
        <i className="check circle outline icon icon-style"></i>
      </h3>

      <p className="success-content">{successMessage}</p>
      <button className="ui button" onClick={handleClick}>
        {successButton}
      </button>
    </div>
  );
};

export default Success;
