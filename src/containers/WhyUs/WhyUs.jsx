import { FaCouch, FaHands } from 'react-icons/fa';
import { MdFreeBreakfast, MdOutlineWatchLater, MdStar } from 'react-icons/md'
import './whyus.css';

const WhyUs = () => {
  return (
      <div id='WhyUs' className="Port_whyUs section-padding">
        <div className="Port_whyUs-heading">
          <h1>Why Us?</h1>
        </div>
        <div className="Port_whyUs-info">
          <div className="whyUs-info-item">
              <div className="whyUs-info-item-icon"><FaCouch /></div>
              <div className="whyUs-info-item-heading"><h1>Comfort</h1></div>
              <div className="whyUs-info-item-detail"><p>Services done from the comfort of your home</p></div>
          </div>
          <div className="whyUs-info-item">
              <div className="whyUs-info-item-icon"><FaHands /></div>
              <div className="whyUs-info-item-heading"><h1>Insurance</h1></div>
              <div className="whyUs-info-item-detail"><p>Complete safety is being guaranteed by us </p></div>
          </div>
          <div className="whyUs-info-item">
              <div className="whyUs-info-item-icon"><MdOutlineWatchLater /></div>
              <div className="whyUs-info-item-heading"><h1>Efficient</h1></div>
              <div className="whyUs-info-item-detail"><p>It will be less time consuming</p></div>
          </div>
          <div className="whyUs-info-item">
              <div className="whyUs-info-item-icon"><MdFreeBreakfast /></div>
              <div className="whyUs-info-item-heading"><h1>Productive</h1></div>
              <div className="whyUs-info-item-detail">Find packers and movers faster through the app</div>
          </div>
          <div className="whyUs-info-item">
              <div className="whyUs-info-item-icon"><MdStar /></div>
              <div className="whyUs-info-item-heading"><h1>Rating</h1></div>
              <div className="whyUs-info-item-detail"><p>Find the best services with our rating system</p></div>
          </div>
        </div>
      </div>
  );
};

export default WhyUs;
