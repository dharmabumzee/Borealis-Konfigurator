import React from "react";

const ModalHeader = ({
  pageNumber,
  setOpenModal,
  setPageNumber,
  setValidCouponEntered,
  setVehicle,
  setDiscount,
  setVehicleChecked,
  setCheckedItems,
  setName,
  setEmail,
  setPhone,
  setComment,
  setSubtotal,
  coupon,
  setCoupon,
  couponVerified,
  setCouponVerified,
}) => {
  const handleClick = () => {
    setSubtotal(0);
    setOpenModal(false);
    setPageNumber(0);
    setValidCouponEntered(false);
    setDiscount(0);
    setVehicleChecked("");
    setCheckedItems([]);
    setName("");
    setEmail("");
    setPhone("");
    setComment("");
    setCoupon("");
    setCouponVerified(false);
    setVehicle("");
  };

  const button = (
    <button
      className="right floated compact circular button-custom"
      onClick={handleClick}
    >
      <i className="close icon button-custom"></i>
    </button>
  );

  const showButton = pageNumber < 4 ? button : null;

  return (
    <>
      {showButton}
      <div className="ui basic segment custom-segment">
        <div>
          <h2>Konfigurator Servisa</h2>
        </div>
      </div>
    </>
  );
};

export default ModalHeader;
