import './Servicescontainer.css';
import { useState } from 'react';

import ServicesNavbar from '../../components/ServicesNavbar/ServicesNavbar';
import ServicesLists from '../ServicesLists/ServicesLists';

const ServicesContainer = () => {

  const [location, setLocation ] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  return (
        <div className="Port_ServicesContainer">
            <ServicesNavbar searchLocation={searchLocation} setLocation={setLocation} setSearchLocation={setSearchLocation} location={location} />
            <ServicesLists searchLocation={searchLocation} />
        </div>
  )
};

export default ServicesContainer;
