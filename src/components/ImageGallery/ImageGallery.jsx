
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';
import PropTypes from 'prop-types';

function  ImageGallery ({img, onClick}) {
    return (
      <ul className="ImageGallery" onClick={onClick}>
            {img.map(({ tags, webformatURL, id, largeImageURL }, index) => {
                
                return (
                    <ImageGalleryItem
                        key={index}
                        img={webformatURL}
                        tags={tags} 
                        bigimg ={largeImageURL}
                    />)
            }         
       )}   
      </ul>
    );
}

export default ImageGallery;

ImageGallery.propTypes = {
  img: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
};