import './ImageGalleryItem.css';
import PropTypes from 'prop-types';

function ImageGalleryItem({ img, tags, bigimg }) {
    return (
        <li className='ImageGalleryItem'>
           <img className='ImageGalleryItem-image' src={img} alt={tags} data-action={bigimg }/>  
        </li>
    );
}

ImageGalleryItem.propTypes = {
  img: PropTypes.string,
  tags: PropTypes.string,
  bigimg: PropTypes.string,
};

export default ImageGalleryItem;