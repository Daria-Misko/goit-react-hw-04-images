import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { App as Wrapper } from './App.styles';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import { Modal } from './Modal/Modal';

import Searchbar from './Searchbar/Searchbar';
import fetchApi from './services/fetchApi';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [total, setTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [imageModal, setImageModal] = useState('');

  useEffect(() => {
    if (!query) return;
    const getImages = async () => {
      try {
        setIsLoading(true);
        const { hits, totalHits } = await fetchApi(query, page);
        if (hits.length === 0) {
          return toast.error('No pictures');
        }
        setImages(prevImages => [...prevImages, ...hits]);
        setTotal(totalHits);
      } catch (error) {
        toast.error('Sorry, something went wrong...Please, try again');
      } finally {
        setIsLoading(false);
      }
    };

    getImages();
  }, [query, page]);

  const changeQuery = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setTotal(0);
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const onOpenModal = imageModal => {
    setShowModal(true);
    setImageModal(imageModal);
  };

  const onCloseModal = () => {
    setShowModal(false);
    setImageModal('');
  };
  const showButton = !isLoading && images.length !== total;
  return (
    <Wrapper>
      <Searchbar onSubmit={changeQuery} />
      {isLoading && <Loader />}
      {images.length !== 0 && (
        <ImageGallery images={images} onClick={onOpenModal} />
      )}
      {showButton && <Button onClick={onLoadMore} />}
      {showModal && <Modal onClose={onCloseModal} imageModal={imageModal} />}
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </Wrapper>
  );
};
