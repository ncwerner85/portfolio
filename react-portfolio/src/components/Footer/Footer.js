import React from "react";

function Footer() {
  return (
    <footer id="sticky-footer" className="py-4 bg-dark text-white-50 fixed-bottom">
      <div className="container text-center">
        <a href="https://www.linkedin.com/in/nicholas-werner-38928783?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bkc238eKDT9GCzKmYmpCoSg%3D%3D">
          <img
            className="linkimg"
            src="../Assets/linkedin-brands.svg"
            alt="linkedin logo"
          />
        </a>
        <a href="https://github.com/ncwerner85">
          <img
            className="linkimg"
            src="react-portfolio/src/Assets/linkedin-brands.svg"
            alt="github logo"
          />
        </a>
        Copyright &copy; 2020 Nicholas Werner
      </div>
    </footer>
  );
}

export default Footer;
