import React, { useEffect } from "react";
import { OverviewText } from "./OverviewText";
import { overviewData } from "../data/data";

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
  const showButton = (id) => {
    return (
      <button
        className="ui tiny button overview-button"
        onClick={() => setPageNumber(id)}
      >
        UREDI
      </button>
    );
  };

  const renderServices = () => {
    return Object.entries(checkedItems).map(([key, value]) => {
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
        </React.Fragment>
      ) : null;
    });
  };

  const renderSubtotal = () => {
    return (
      <div className="amount">
        {validCouponEntered ? (
          <span style={{ fontSize: "15px" }}>
            Popust (30%): {"  "}-{discountRate.toFixed(2)} KN
            <br />
          </span>
        ) : null}
        <span
          style={{
            fontWeight: "bold",
          }}
        >
          UKUPNO:{" "}
          {validCouponEntered
            ? (subtotal - discountRate).toFixed(2)
            : subtotal.toFixed(2)}{" "}
          KN
        </span>
      </div>
    );
  };

  const renderContent = (id) => {
    // eslint-disable-next-line default-case
    switch (id) {
      case 0:
        return <p>{vehicle}</p>;
      case 1:
        return (
          <>
            <div className="overview-services">{renderServices()}</div>
            {renderSubtotal()}
          </>
        );
      case 2:
        return null;
    }
  };

  const OverviewBox = (overviewData) => {
    const { id, title } = overviewData;
    return (
      <div className="ui vertical segment">
        <h3>
          <span style={{ marginRight: "10px" }}>{title}</span>
          {"  "}
          {showButton(id)}
        </h3>
        {renderContent(id)}
      </div>
    );
  };

  return (
    <>
      <h3>Korak 4. Pregled i potvrda vašeg odabira</h3>
      <OverviewText />
      <div className="overview">
        {overviewData.map(({ id, title }) => {
          return <OverviewBox id={id} title={title} key={id} />;
        })}
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
