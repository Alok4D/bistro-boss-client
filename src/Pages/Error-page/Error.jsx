import { Link } from 'react-router-dom';
import errorPic from '../../../src/assets/Error-page-photo/Screenshot 2024-05-09 234423.png';
import { Helmet } from 'react-helmet-async';
import { FaHome } from 'react-icons/fa';

const Error = () => {
    return (
        <div >
            <Helmet><title>Page Not Found || 404</title></Helmet>
          <div className='flex justify-center mt-28'>
          <img src={errorPic} alt="" />
          </div>
            <div className='flex justify-center'>
                <Link to="/"><button className='btn btn-secondary mt-10'><FaHome className='text-xl text-green-300'></FaHome>Back To Home</button></Link>
            </div>
        </div>
    );
};

export default Error;