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

            <button
              className="ui tiny button overview-button"
              onClick={() => setPageNumber(0)}
            >
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
          <div className="overview-services">
            {Object.entries(checkedItems).map(([key, value]) => {
              return value === true ? (
                <React.Fragment key={key}>
                  <div className="item">{key}</div>
                  {services.map((service, index) =>
                    key === service.name ? (
                      <div className="item" key={index}>
                        {service.price} KN
                      </div>
                    ) : null
                  )}
                  {/* <br /> */}
                </React.Fragment>
              ) : null;
            })}
          </div>
          <div className="amount">
            {validCouponEntered ? (
              <span>
                Popust (30%):{" "}
                <span>
                  {"  "}-{discountRate.toFixed(2)} KN
                </span>
                <br />
              </span>
            ) : null}
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              UKUPNO:{" "}
              <span>
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
        <div className="item item-1">Name</div>
        <div className="item item-name">{name}</div>

        <div className="item item-2">Email adresa:</div>
        <div className="item item-email">{email}</div>
        <div className="item item-3">Broj telefona:</div>
        <div className="item item-phone"> {phone}</div>

        <div className="item item-4">Napomena: </div>
        <div className="item item-comment">{comment}</div>
      </div>
    </>
  );
};

export default Overview;
