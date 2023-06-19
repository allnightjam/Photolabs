
import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

// a function for displaying individiual photos and their information
const PhotoListItem = (props) => {
  // a function that toggles the 'SelectedPhoto' state and 'ShowModal' state
  const openModal = (id) => {
    props.setSelectedPhoto(id);
    props.setShowModal(true);
  };
  
  return (
    <div>
      <div className="photo-list__item">
        <PhotoFavButton photoId={props.id} toggleFavorite={props.toggleFavorite}/>
        <img onClick={() => openModal(props.id)} src={props.imageSource} alt={props.username} className="photo-list__image" />
        <div className='photo-list__user-details'>
          <img className='photo-list__user-profile' src={props.profile} />
          <div className='photo-list__user-info'>
            {props.username}
            <p className='photo-list__user-location'>{props.city}, {props.country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

PhotoListItem.defaultProps = {
  "id": "1",
  "location": {
    "city": "Montreal",
    "country": "Canada"
  },
  "imageSource": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  "username": "Joe Example",
  "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
}

export default PhotoListItem