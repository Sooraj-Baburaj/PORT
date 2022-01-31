import { AiOutlineSearch, AiOutlineSchedule } from 'react-icons/ai';
import { GoPackage } from 'react-icons/go';
import { FaShippingFast } from 'react-icons/fa';
import './Howwework.css';


const HowWeWork = () => {
  return (
      <div className="Port_HowWeWork section-padding" id='HWW' >
          <div className="Port_HowWeWork-heading">
              <h1>How We Work</h1>
          </div>
          <div className="Port_HowWeWork-container">
              <div className="Port_HowWeWork-container-item">
                    <div className="HWW-icon"><AiOutlineSearch /></div>
                    <div className="HWW-content">
                        <div className="HWW-content-title"><h3>Find the best services</h3></div>
                        <div className="HWW-content-desc"><p>Our rating system helps you to find the best services</p></div>
                    </div>
              </div>
              <div className="Port_HowWeWork-container-item">
                    <div className="HWW-icon"><GoPackage /></div>
                    <div className="HWW-content">
                        <div className="HWW-content-title"><h3>Share your Requirement</h3></div>
                        <div className="HWW-content-desc"><p>Tell them where and when do you want to move</p></div>
                    </div>
              </div>
              <div className="Port_HowWeWork-container-item">
                    <div className="HWW-icon"><AiOutlineSchedule /></div>
                    <div className="HWW-content">
                        <div className="HWW-content-title"><h3>Schedule and Confirm</h3></div>
                        <div className="HWW-content-desc"><p>Pick a slot and pay a token amount to confirm your move</p></div>
                    </div>
              </div>
              <div className="Port_HowWeWork-container-item">
                    <div className="HWW-icon"><FaShippingFast /></div>
                    <div className="HWW-content">
                        <div className="HWW-content-title"><h3>We get you moved!</h3></div>
                        <div className="HWW-content-desc"><p>Our partner will arive as per schedule to pack & load your belonging</p></div>
                    </div>
              </div>
          </div>
      </div>
  )
};

export default HowWeWork;
