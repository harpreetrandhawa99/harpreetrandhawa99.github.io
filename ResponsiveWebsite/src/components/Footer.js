import React from "react";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="text-xs-center">
            &copy; {new Date().getFullYear()} Harpreet Porfolio Website - All
            Rights
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
