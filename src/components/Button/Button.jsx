
import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ img, onClick }) => {
  return (<>
    { img.length > 0 && img.length % 12 === 0 && (<button className='Button' type="button" onClick={onClick}>Load more</button>) }
  </>);
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
  img: PropTypes.array,
};