import React, { Fragment } from 'react';
import '../styles/PhotoDetailsModal.scss'
import PhotoFavButton from '../components/PhotoFavButton';

// a function for displaying modals for individual photos
export const PhotoDetailsModal = ({ closeModal, id, photos, toggleFavorite }) => {
  const selectedPhoto = photos.find(photo => photo.id === id); 
  const similarPhotos = selectedPhoto.similar_photos;

  return (
    <div className='photo-details-modal'>
      <button onClick={closeModal} className='photo-details-modal__close-button'>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_428_287">
            <rect width="18" height="18" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>
        <PhotoFavButton photoId={selectedPhoto.id} toggleFavorite={toggleFavorite} />
      <div className="photo-details-modal__container">
        <img src={selectedPhoto.urls.regular} alt="Selected Photo" className="photo-details-modal__image"/>
      </div>
      <div className="photo-details-modal__header">
        <p> Related Photos </p>
        <div className="photo-details-modal__related">
          {similarPhotos && Object.values(similarPhotos).length > 0 ? (
            Object.values(similarPhotos).map((photo) => (
              <div key={photo.id} className="photo-details-modal__item">
                <PhotoFavButton photoId={selectedPhoto.id} toggleFavorite={toggleFavorite} />
                <img src={photo.urls.regular} alt="Similar Photo" className="photo-details-modal__images" />
                <div className='photo-list__user-details'>
                  <img className='photo-list__user-profile' src={photo.user.profile} />
                  <div className='photo-list__user-info'>
                    {photo.user.username}
                  <p className='photo-list__user-location'>{photo.location.city}, {photo.location.country}</p>
                  </div>
                </div>
              </div>
          ))
          ) : (
            <p> No similar photos. </p>
          )}
        </div>
      </div>
    </div>
    
  );
};

export default PhotoDetailsModal;