import React from 'react';
import '../styles/TopicListItem.scss'

// a function for generating multiple topics
const TopicListItem = (props) => {
  return (
  <div className="topic-list__item" onClick={props.onClick}>
      <span> 
      <h3> {props.label} </h3>
      </span>
  </div>
  );
};

TopicListItem.defaultProps =   {
  "id": "1",
  "slug": "topic-1",
  "label": "Nature"
}
export default TopicListItem