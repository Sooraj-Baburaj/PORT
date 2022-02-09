import { useState, useEffect } from 'react';
import './serviceslist.css';
import { FaTruckLoading, FaTruck, FaBoxOpen } from 'react-icons/fa';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { MdLocationPin } from 'react-icons/md';

const ServicesList = ({extended, setExtended, index, data}) => {

  const [ randNum, setRandNum ] = useState()

  useEffect(() => {
    let rand = Math.floor(Math.random() * 3);

    setRandNum(rand)
  }, [])

  const businessRating = 4
  return (
      <div onClick={() => extended === index ? setExtended(null) : setExtended(index)} className="Port_ServicesList" style={{height: extended === index ? '140px' : '100px' }} >
        <div className="Port_ServicesList-icon">
          {randNum === 0 && <FaTruckLoading />}
          {randNum === 1 && <FaTruck />}
          {randNum === 2 && <FaBoxOpen />}
        </div>
        <div className="Port_ServicesList-Details">
          <div className="Port_ServicesList-Details-bussName"><h3>{data?.businessName}</h3></div>
          <div className="Port_ServicesList-Details-rating">
          { [...Array(5)].map((a,index) => (
                  <div key={index} className="Port_ServicesList-Details-rating-icon">
                    {index < businessRating ? <AiFillStar /> : <AiOutlineStar /> }
                  </div>
                ))}
          </div>
          <div className="Port_ServicesList-Details-address">
            <div className="Port_ServicesList-Details-address-icon"><MdLocationPin /></div>
            <div className="Port_ServicesList-Details-address-location"><p>{`${data.street}, ${data.city}, ${data.state}`}</p></div>
          </div>
          {extended === index && (<div className="Port_ServicesList-Details-contact" >
              <a href={`tel:${data?.contact}`}><button>Call Now</button></a>
              <a rel="noreferrer" target="_blank" href={`mailto:${data.eMail}`}><button>E-mail</button></a>
          </div> )}
        </div>
      </div>
  )
};

export default ServicesList;
