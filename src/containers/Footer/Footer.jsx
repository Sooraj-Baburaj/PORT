import './footer.css';

const Footer = () => {
  return (
      <div className="Port_Footer" >
        <div className="Port_navbar-links">
            <div className="Port_navbar-link-div">
                <h4>Links</h4>
                <p><a href="#Services">Services</a></p>
                <p><a href="#WhyUs">About Us</a></p>
                <p><a href="#HWW">How we work</a></p>
            </div>
            <div className="Port_navbar-link-div">
                <h4>Company</h4>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Contact</p>
            </div>
            <div className="Port_navbar-link-div">
                <h4>Get in touch</h4>
                <p>Abc st, New Delhi</p>
                <p>123-576-928</p>
                <p>port@abz.com</p>
            </div>
        </div>
        <div className="Port_Footer-copyright">
            <p>@Port 2022 All rights reserved</p>
        </div>
      </div>
  )
};

export default Footer;
