import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandCard = ({ carBrand }) => {
    const { name, image } = carBrand;
    return (
           <Link to={`/carcollections/${name}`}>
            <div className="bg-white hover:bg-black hover:text-white shadow-md p-4">
                <p className="text-xl font-bold text-left">{name}</p>
                <img src={image} alt="car" />
            </div>
        </Link>
    );
};

BrandCard.propTypes = {
    carBrand:PropTypes.object
};

export default BrandCard;