import './ServicesNavbar.css';
import { useState, useEffect } from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiCurrentLocation, BiSearch } from 'react-icons/bi';
import ServicesFilters from '../ServicesFilters/ServicesFilters';
import axios from 'axios';

const ServicesNavbar = ({location, setLocation, setSearchLocation, searchLocation}) => {

    const [mobileFilterState, setMobileFilterState] = useState(false);
    const [ip, setIp] = useState(null);

    let screenWidth = window.innerWidth;
    const showfilters = screenWidth > 1080;

    const getData = async () => {
         await axios.get('https://geolocation-db.com/json/')
        .then((res) => setIp(res.data.IPv4));
        if(ip !== null) {
          await axios.get(`https://ipinfo.io/${ip}?token=b9bad8119977b3`)
          .then((res) => setSearchLocation(res.data.city))
        }
      }
      
      useEffect( () => {
        getData();
      }, [ip])

  return (
      <div className="Port_ServicesNavbar">
          <div className="Port_ServicesNavbar-header">
              <h1>PORT</h1>
              <div onClick={() => setMobileFilterState(!mobileFilterState)} style={{transform: mobileFilterState ? "rotate(90deg)" : "rotate(0deg)"}} className="Port_ServicesNavbar-icon">
                  { !showfilters && <AiOutlineSetting />}
              </div>
          </div>
          <div className="Port_ServicesNavbar-search">
              <input type="text" value={location} onChange={(e) => setLocation(e.target.value) } placeholder="Find services near you..." />
              <div className="Port_ServicesNavbar-search-icon" onClick={() => setSearchLocation(location)}><BiSearch /></div>
          </div>
          <div onClick={() => getData()} className="Port_ServicesNavbar-subtitle">
              <div className="Port_ServicesNavbar-subtitle-icon"> <BiCurrentLocation /> </div>
              <div className="Port_ServicesNavbar-subtitle-Para">{searchLocation.length === 0 ? <p>Add a location</p> : <p>{searchLocation}</p> }</div>
          </div>
          <div style={{left : mobileFilterState ? "0px" : "-300px" }} className="Port_ServicesContainer-filters">
              <ServicesFilters />
            </div>
      </div>
  )
};

export default ServicesNavbar;
