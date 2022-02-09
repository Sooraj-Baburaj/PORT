import './loading.css';
import { FaCircleNotch, FaRegSadTear } from 'react-icons/fa';

const Loading = ({loading}) => {
  return (
      <div className="Port_Loading">
          {loading ?  (<div className="loader">
                        <FaCircleNotch />
                      </div>) 
                   :  (
                        <div className="noResults">
                            <div className="noResults-icon"><FaRegSadTear /></div>
                            <div className="noResults-message"><p>No services found. Try checking the spelling or adding nearby cities...</p></div>
                        </div>
                      )}
      </div>
  )
};

export default Loading;
