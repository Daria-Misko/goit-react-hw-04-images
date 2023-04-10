import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styles';

const ImageGallery = ({ images, onClick }) => {
  return (
    <>
      <List>
        {images.map(image => (
          <ImageGalleryItem image={image} key={image.id} onClick={onClick} />
        ))}
      </List>
    </>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
