import { useState } from 'react';

import './ServicesLists.css';
import ServicesList from '../../components/ServicesList/ServicesList';
import Loading from '../../components/Loading/Loading';
import { useGetServicesQuery, useGetServicesFromLocationQuery } from '../../services/services';

const ServicesLists = ({searchLocation}) => {

  const { data = [], isLoading } = useGetServicesQuery(); 
  const [extended, setExtended] = useState(null)
  const {data: locationData = [], isLoading: locationIsLoading } = useGetServicesFromLocationQuery(searchLocation);

  return (
      <div className="Port_ServicesLists">
        {searchLocation.length === 0 && (data.length === 0 ? <Loading loading={isLoading ? true : false} /> : data.map((d,index) => (
            <ServicesList extended={extended} setExtended={setExtended} index={index} data={d} key={d._id} />
          ))) }
        {searchLocation.length !== 0 && (locationData.length === 0 ? <Loading loading={locationIsLoading ? true : false} /> : locationData.map((d,index) => (
            <ServicesList extended={extended} setExtended={setExtended} index={index} data={d} key={d._id} />
          ))) }
      </div>
  )
};

export default ServicesLists;
