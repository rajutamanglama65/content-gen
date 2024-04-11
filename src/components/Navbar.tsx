import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <>
      <div style={{ backgroundColor: "#884dff", padding: "0.5rem 0" }}>
        <div className="wrapper flex split-pair">
          <img
            src="https://www.uperform.com/wp-content/uploads/2018/01/ancile-logo-175x44.png.webp"
            alt="logo"
            height={35}
          />
          <button className="btn-logout">logout</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
