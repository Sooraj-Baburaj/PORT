import './home.css';
import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs';

import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
    let screenWidth = window.innerWidth;

    const mobile = screenWidth < 780;
    return (
        <div className='Port_home'>
            <Navbar />
            <div className="Port_home-content">
                <div className={!mobile && 'space'}></div>
                <div className="space home-space-content">
                    <div className="home-content">
                    <h1>Moving homes through pockets</h1>
                    <p>Port is a digital product which helps a person carry their home appliances
                        safely from one place to another. It helps people by making it easy for them
                        to find the best mover and packers due to the rating system present in it.</p>
                    </div>
                </div>
            </div>
            <div className="social-media-icons">
                    <div className="media-icons">
                        <a href=""><BsFacebook /></a>
                        <a href=""><BsInstagram /></a>
                        <a href=""><BsTwitter /></a>
                    </div>
            </div>
        </div>
    )
};

export default Home;
