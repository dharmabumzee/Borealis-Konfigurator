import React from "react";
import tokic from "../images/tokic.png";

const Header = () => {
  return (
    <div className="ui left aligned segment">
      <div className="ui header" style={{ display: "flex" }}>
        <img src={tokic} alt="tokic-logo" className="ui massive image" />
        <div style={{ marginLeft: "10px" }}>
          <p style={{ marginBottom: "0px" }}>Konfigurator servisa</p>
          <p>Izračunajte trošak servisa</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
