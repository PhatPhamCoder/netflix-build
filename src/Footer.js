import React from "react";

function Footer() {
  return (
    <>
      <div
        className="Footer"
        style={{
          marginTop: "2px",
          fontSize: "15px",
          color: "black",
          textAlign: "center",
          padding: "8px 0",
          background: "white",
          fontWeight: "bold",
        }}
      >
        &copy; {new Date().getFullYear()} Powered By Ptech |
        <a
          href="https://www.facebook.com/phatphamstudio/"
          style={{ textDecoration: "none", margin: "4px", color: "red" }}
        >
          Contact!
        </a>
      </div>
    </>
  );
}

export default Footer;
