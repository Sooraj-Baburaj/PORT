import './services.css';
import office from '../../images/office.jpg';
import household from '../../images/household.jpg';
import outercity from '../../images/outercity.jpg';

const Services = () => {
  return (
    <div id='Services' className="Port_services section-padding">
      <div className="Port_services-heading">
        <h1>Services</h1>
      </div>
      <div className="Port_services-container">
        <div className="Port_services-container-item">
          <img src={office} alt="Office" />
          <h2>Office shifting</h2>
          <p>We design and plan out your office area. We incorporate pneumatic defer transport vehicle for your furnishings, proficient evacuation equipment, convenient outside lifts, just as specific staff and tradesmen.</p>
          <div className="Findservices-button">
            <a href="/services"><button>Find services</button></a>
          </div>
        </div>
        <div className="Port_services-container-item">
          <img src={outercity} alt="Outercity" />
          <h2>Packing and moving</h2>
          <p>While proficient qualified and custom-made moving Services is a perilous component, corporate clients additionally need option to use to data, benchmarking data and generally speaking arrangement association.</p>
          <div className="Findservices-button">
          <a href="/services"><button>Find services</button></a>
          </div>
        </div>
        <div className="Port_services-container-item">
          <img src={household} alt="Household" />
          <h2>Household shifting</h2>
          <p>We endow with whole home shifting as well as home stuff and property. These services for packing and moving as well as shifting are available from one residence to another within your town country or to far-off location.</p>
          <div className="Findservices-button">
          <a href="/services"><button>Find services</button></a>
          </div>
        </div>
      </div>
    </div>
  )};

export default Services;
