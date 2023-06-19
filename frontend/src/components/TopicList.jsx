import React, { useState } from 'react';
import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';

// a function for generating topics
const TopicList = ({ topics, fetchPhotosAndTopic }) => {
  const [activeTopicId, setActiveTopicId] = useState(null);

  // a function that toggles the 'ActiveTopicId' state and 'fetchPhotosAndTopic' function
  const handleClick = (topicId) => {
    setActiveTopicId(topicId);
    fetchPhotosAndTopic(topicId);
  };

  return (
  <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem
        key={topic.id}
        id={topic.id}
        slug={topic.slug}
        label={topic.title}
        active={topic.id === activeTopicId}
        onClick={() => handleClick(topic.id)}
        ></TopicListItem>
      ))}
  </div>
  );
};

TopicList.defaultProps = {
  topics: [
    {
      "id": "1",
      "slug": "topic-1",
      "title": "Nature"
    },  
    {
      "id": "2",
      "slug": "topic-2",
      "title": "Travel"
    },
    {
      "id": "3",
      "slug": "topic-3",
      "title": "People"
    },
  ]
}
export default TopicList