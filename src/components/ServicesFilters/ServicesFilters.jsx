import './ServicesFilters.css';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { useSelector, useDispatch} from 'react-redux';
import { changeRating } from '../../reducers/FilterRatingReducers';

const ServicesFilters = () => {
  let screenWidth = window.innerWidth;

  const showfilters = screenWidth > 1080;

  const ratingState = useSelector((state) => state.FilterRatings.value);
  const dispatch = useDispatch()

  return (
      <div className="Port_ServicesFilters" style={{background: showfilters ? "rgba(0,255,0,0.2)": "rgba(255,255,255,0.3)", backdropFilter: !showfilters && "blur(3px)" }}>
          <h1>Filters</h1>
          <div className="Port_ServicesFilters-filters">
            <div className="Port_ServicesFilters-filters-rating">
              <h3>Ratings</h3>
              <div className="Port_ServicesFilters-filters-stars">
                { [...Array(5)].map((a,index) => (
                  <div key={index} onClick={() => dispatch(changeRating(index+1))} className="filters-star-item">
                    {index < ratingState ? <AiFillStar /> : <AiOutlineStar /> }
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="Port_ServicesFilters-applyButton">
            <button>Apply</button>
          </div>
      </div>
  )
};

export default ServicesFilters;
