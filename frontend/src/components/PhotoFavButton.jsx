import React, { useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

// a function for favouriting photos
function PhotoFavButton(props) {
  const [isClicked, setIsClicked] = useState(false);

  // a function that toggles the 'isClicked' state and invokes the 'toggleFavorite' function for a specific photo id 
  const handleClick = () => {
    setIsClicked(!isClicked);
    props.toggleFavorite(props.photoId);
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleClick}>
        <FavIcon fill= {isClicked ? '#C80000' : null}/> 
      </div>
    </div>
  );
};

export default PhotoFavButton;