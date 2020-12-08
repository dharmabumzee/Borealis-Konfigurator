import React from "react";
import { OverviewText } from "./OverviewText";

const Overview = ({
  setPageNumber,
  name,
  email,
  phone,
  comment,
  vehicle,
  checkedItems,
  subtotal,
  services,
  total,
  discountRate,
  validCouponEntered,
}) => {
  return (
    <>
      <h3>Korak 4. Pregled i potvrda vašeg odabira</h3>
      <OverviewText />
      <div className="overview">
        <div className="ui vertical segment">
          <h3>
            <span style={{ marginRight: "10px" }}>MODEL VOZILA</span>
            {"  "}

            <button className="ui tiny button" onClick={() => setPageNumber(0)}>
              UREDI
            </button>
          </h3>

          <p>{vehicle}</p>
        </div>
        <div className="ui vertical segment">
          <h3>
            <span style={{ marginRight: "10px" }}> ODABRANE USLUGE</span>
            {"  "}

            <button className="ui tiny button" onClick={() => setPageNumber(1)}>
              UREDI
            </button>
          </h3>
          <p className="overview-services">
            {Object.entries(checkedItems).map(([key, value]) => {
              return value === true ? (
                <React.Fragment key={key}>
                  <span>{key}</span>
                  {services.map((service) =>
                    key === service.name ? (
                      <span>{service.price},00 KN</span>
                    ) : null
                  )}
                  {/* <br /> */}
                </React.Fragment>
              ) : null;
            })}
          </p>
          <div className="amount">
            {validCouponEntered ? (
              <span>
                Popust (30%):{" "}
                <span style={{ marginLeft: "10px", marginRight: "-20px" }}>
                  -{discountRate.toFixed(2)} KN
                </span>
                <br />
              </span>
            ) : null}
            <span style={{ fontWeight: "bold", fontSize: "16px" }}>
              UKUPNO:{" "}
              <span style={{ marginLeft: "10px", marginRight: "-20px" }}>
                {validCouponEntered
                  ? (subtotal - discountRate).toFixed(2)
                  : subtotal.toFixed(2)}{" "}
                KN
              </span>
            </span>
          </div>
        </div>
        <div className="ui vertical segment">
          <h3>
            <span style={{ marginRight: "10px" }}> KONTAKT PODACI</span>
            {"  "}

            <button className="ui tiny button" onClick={() => setPageNumber(2)}>
              UREDI
            </button>
          </h3>
        </div>
      </div>
      <div className="ui vertical segment overview-contact">
        <div className="item-1">
          <span>Ime i prezime:</span> <span>{name}</span>
        </div>
        <div className="item-2">
          <span>Email adresa:</span>
          <span> {email}</span>
        </div>
        <div className="item-3">
          <span>Broj telefona:</span>
          <span> {phone}</span>
        </div>
        <div className="item-4">
          <span>{`Napomena: ${comment}`}</span>
        </div>
      </div>
    </>
  );
};

export default Overview;
