import PropTypes from 'prop-types';
import { ListItem, Image } from './ImageGalleryItem.styles';

const ImageGalleryItem = ({
  image: { largeImageURL, webformatURL, name },
  onClick,
}) => {
  return (
    <ListItem onClick={() => onClick(largeImageURL)}>
      <Image src={webformatURL} alt={name} />
    </ListItem>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  image: PropTypes.shape({
    largeImageURL: PropTypes.string,
    webformatURL: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};
