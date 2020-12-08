import React, { useState } from "react";
import { Services } from "./Services";

const ChooseService = ({
  checkedItems,
  setCheckedItems,
  setIsButtonDisabled,
  subtotal,
  setSubtotal,
  services,
  discountRate,
  validCouponEntered,
  setValidCouponEntered,
  setDiscount,
  coupon,
  setCoupon,
  couponVerified,
  setCouponVerified,
}) => {
  const [couponClicked, setCouponClicked] = useState(false);
  // const [couponVerified, setCouponVerified] = useState(false);

  const Checkbox = ({
    type = "checkbox",
    name,
    price,
    checked = false,
    onChange,
  }) => {
    return (
      <input
        id="service"
        type={type}
        name={name}
        price={price}
        checked={checked}
        onChange={onChange}
        className="checkbox"
      />
    );
  };

  const handleChange = (e) => {
    setCheckedItems({
      ...checkedItems,

      [e.target.name]: e.target.checked,
    });

    e.target.checked
      ? setSubtotal(subtotal + Number(e.target.getAttribute("price")))
      : setSubtotal(subtotal - Number(e.target.getAttribute("price")));
  };

  const handleClick = () => {
    setCouponClicked(!false);
  };

  const handleOnSubmit = (e) => {
    console.log(e.target.value);
    if (e.target.value !== "Tokić123") {
      setValidCouponEntered(true);
      setDiscount(discountRate);
    }
  };

  const handleOnChange = (e) => {
    setCoupon(e.target.value);
  };

  const verifyCoupon = () => {
    setCouponVerified(true);
    if (coupon === "Tokić123") {
      setValidCouponEntered(true);
      setDiscount(discountRate);
    }
  };

  // const showMessage = (coupon) => {
  //   return coupon === "Tokic123" ? (
  //     <p style={{ color: "#50b04d" }}>
  //       Hvala vam, unijeli ste ispravan kod kupona
  //     </p>
  //   ) : (
  //     <p style={{ color: "#B03060" }}>Niste unijeli važeći kod</p>
  //   );
  // };

  const couponErrorMessage = () => {
    return <p style={{ color: "#B03060" }}>Niste unijeli važeći kod</p>;
  };

  const calculateDiscount = () => {
    return ((subtotal * 30) / 100).toFixed(2);
  };

  console.log("Coupon clicked: ", couponVerified);
  console.log("Is coupon valid? ", validCouponEntered);
  return (
    <>
      <h3>Korak 2. Odaberite jednu ili više usluga za koje ste</h3>
      {Object.keys(checkedItems).length === 0
        ? setIsButtonDisabled(false)
        : setIsButtonDisabled(true)}
      <Services
        services={services}
        Checkbox={Checkbox}
        handleChange={handleChange}
        checkedItems={checkedItems}
      />
      <div className="total" style={{ marginTop: "50px" }}>
        <span className="coupon" onClick={handleClick}>
          {couponClicked && !validCouponEntered ? (
            <>
              <div className="ui mini action input">
                <input
                  type="text"
                  placeholder="Unesite kod..."
                  // onSubmit={handleOnSubmit}
                  onChange={handleOnChange}
                />
                <button className="ui button" onClick={verifyCoupon}>
                  Primjeni
                </button>
              </div>
              {couponVerified && !validCouponEntered
                ? couponErrorMessage()
                : null}
            </>
          ) : validCouponEntered ? (
            <div style={{ marginTop: "0px" }}>
              <p style={{ color: "#50b04d" }}>
                Hvala vam, unijeli ste ispravan kod kupona
              </p>

              <div style={{ color: "#000000", fontSize: "15px" }}>
                OSNOVICA:{" "}
                <span style={{ marginLeft: "50px" }}>
                  {subtotal.toFixed(2)} kn
                </span>
                <br />
                Popust (30%):{" "}
                <span style={{ marginLeft: "45px" }}>
                  {" "}
                  -{calculateDiscount()} kn
                </span>
              </div>
            </div>
          ) : (
            <span
              style={{
                textDecoration: "underline",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Imam kupon
            </span>
          )}
        </span>

        <br />

        <span>
          UKUPNO:{" "}
          {validCouponEntered
            ? (subtotal - calculateDiscount()).toFixed(2)
            : subtotal.toFixed(2)}{" "}
          KN
        </span>
      </div>
    </>
  );
};

export default ChooseService;
