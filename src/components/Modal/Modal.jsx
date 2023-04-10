import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalImage, ModalWrapper } from './Modal.styles';

export const Modal = ({ onClose, imageModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleClickOverlay = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleClickOverlay}>
      <ModalWrapper>
        <ModalImage src={imageModal} alt="photo" />
      </ModalWrapper>
    </Overlay>
  );
};

Modal.propTypes = {
  imageModal: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
