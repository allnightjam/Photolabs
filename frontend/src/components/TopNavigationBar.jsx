import React from 'react';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList.jsx';

// a function for displaying the navigation bar (e.g. topics)
const TopNavigation = ({ topics, favorites, fetchPhotosAndTopic }) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
        <TopicList topics={topics} fetchPhotosAndTopic={fetchPhotosAndTopic}/>
        <FavBadge hasFavorite={favorites.length > 0}/>
    </div>
  );
};

export default TopNavigation;