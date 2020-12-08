import React, { useState } from "react";

import Header from "./components/Header";
import Modal from "./components/Modal";

import ChooseVehicle from "./components/ChooseVehicle";
import ChooseService from "./components/ChooseService";
import Contact from "./components/Contact";
import Success from "./components/Success";
import Overview from "./components/Overview";

import ModalHeader from "./components/ModalHeader";

import "./App.css";

const App = () => {
  const services = [
    { id: 1, name: "Zamjena ulja i filtera", price: "500.00" },
    { id: 2, name: "Promjena pakni", price: "450.00" },
    { id: 3, name: "Promjena guma", price: "100.00" },
    { id: 4, name: "Servis klima uređaja", price: "299.00" },
    { id: 5, name: "Balansiranje guma", price: "50.00" },
    { id: 6, name: "Zamjena ulja u kočnicama", price: "229.00" },
  ];

  const [openModal, setOpenModal] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  const [vehicle, setVehicle] = useState(null);
  const [serviceChoice, setServiceChoice] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [subtotal, setSubtotal] = useState(0);

  const [vehicleChecked, setVehicleChecked] = useState(0);
  const [validCouponEntered, setValidCouponEntered] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [coupon, setCoupon] = useState(0);
  const [couponVerified, setCouponVerified] = useState(false);

  let discountRate = (subtotal * 30) / 100;
  // let total = subtotal - discount;

  const isButtonAvailable = () => {
    let isChecked = [];

    Object.entries(checkedItems).map(([key, value]) => {
      return value === true ? isChecked.push(value) : true;
    });
    return isChecked.length < 1;
  };

  const renderButtons = () => {
    return (
      <>
        {pageNumber > 0 ? (
          <button
            className="ui button"
            onClick={() => setPageNumber(pageNumber - 1)}
          >
            Nazad
          </button>
        ) : null}

        <button
          className="ui button"
          onClick={() => setPageNumber(pageNumber + 1)}
          disabled={
            (pageNumber === 0 && !vehicle) ||
            (pageNumber === 1 && Object.keys(checkedItems).length === 0) ||
            (Object.keys(checkedItems).length > 0 && isButtonAvailable()) ||
            (pageNumber === 2 && (name === "" || email === "" || phone === ""))
          }
        >
          {pageNumber === 3 ? "Pošalji" : "Dalje"}
        </button>
      </>
    );
  };

  const renderActions = (pageNumber) => {
    return pageNumber < 4 ? renderButtons() : null;
  };

  const renderContent = (pageNumber) => {
    switch (pageNumber) {
      case 1:
        return (
          <ChooseService
            checkedItems={checkedItems}
            setCheckedItems={setCheckedItems}
            setIsButtonDisabled={setIsButtonDisabled}
            subtotal={subtotal}
            setSubtotal={setSubtotal}
            services={services}
            discountRate={discountRate}
            validCouponEntered={validCouponEntered}
            setValidCouponEntered={setValidCouponEntered}
            setDiscount={setDiscount}
            discount={discount}
            coupon={coupon}
            setCoupon={setCoupon}
            couponVerified={couponVerified}
            setCouponVerified={setCouponVerified}
          />
        );
      case 2:
        return (
          <Contact
            name={name}
            email={email}
            phone={phone}
            comment={comment}
            setName={setName}
            setEmail={setEmail}
            setPhone={setPhone}
            setComment={setComment}
          />
        );
      case 3:
        return (
          <Overview
            setPageNumber={setPageNumber}
            name={name}
            email={email}
            phone={phone}
            comment={comment}
            vehicle={vehicle}
            checkedItems={checkedItems}
            subtotal={subtotal}
            services={services}
            discountRate={discountRate}
            // total={total}
            validCouponEntered={validCouponEntered}
          />
        );
      case 4:
        return (
          <Success
            setOpenModal={setOpenModal}
            setPageNumber={setPageNumber}
            setDiscount={setDiscount}
            setVehicle={setVehicle}
            setVehicleChecked={setVehicleChecked}
            setName={setName}
            setEmail={setEmail}
            setPhone={setPhone}
            setComment={setComment}
            setCheckedItems={setCheckedItems}
            setValidCouponEntered={setValidCouponEntered}
            setSubtotal={setSubtotal}
            coupon={coupon}
            setCoupon={setCoupon}
            couponVerified={couponVerified}
            setCouponVerified={setCouponVerified}
          />
        );
      default:
        return (
          <ChooseVehicle
            vehicle={vehicle}
            setVehicle={setVehicle}
            setIsButtonDisabled={setIsButtonDisabled}
            vehicleChecked={vehicleChecked}
            setVehicleChecked={setVehicleChecked}
            subtotal={subtotal}
          />
        );
    }
  };

  const handleClick = () => {
    setOpenModal(true);
  };

  const launchModal = () => {
    return (
      <Modal
        title={
          <ModalHeader
            pageNumber={pageNumber}
            setOpenModal={setOpenModal}
            setPageNumber={setPageNumber}
            setValidCouponEntered={setValidCouponEntered}
            setDiscount={setDiscount}
            setVehicle={setVehicle}
            setVehicleChecked={setVehicleChecked}
            setCheckedItems={setCheckedItems}
            setName={setName}
            setEmail={setEmail}
            setPhone={setPhone}
            setComment={setComment}
            setSubtotal={setSubtotal}
            coupon={coupon}
            setCoupon={setCoupon}
            couponVerified={couponVerified}
            setCouponVerified={setCouponVerified}
          />
        }
        content={renderContent(pageNumber, setPageNumber)}
        actions={renderActions(pageNumber, setPageNumber)}
        pageNumber={pageNumber}
      />
    );
  };

  return (
    <>
      <Header />
      <div className="App ui center aligned">
        <p>Pritisnite gumb niže kako biste pokrenuli</p>
        <button className="ui button" onClick={handleClick}>
          Pokreni konfigurator
        </button>
        {openModal ? launchModal() : null}
      </div>
    </>
  );
};

export default App;
