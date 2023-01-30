import React from "react";

import "./style/footer.css";

const footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer_container">
          <p className="footer_para">
            &copy; Copyright © {new Date().getFullYear()} Company Name. All
            rights reserved
          </p>
          <p className="footer_para">
            <a href="/privacy-policy.html">Privacy Policy</a> |&nbsp; 
            <a href="/terms-of-use.html">Terms of Use.</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default footer;
