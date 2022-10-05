import React from 'react';
import { useContext } from 'react';
import Feedbackitem from './Feedbackitem';
import FeedbackContext from '../context/FeedbackContext';

//feedback is the data state name from the App()
function FeedbackList({}) {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map(item => (
        <Feedbackitem key={item.id} item={item} />
      ))}
    </div>
  );

  // return (
  //   <div className="feedback-list">
  //     {feedback.map(item => (
  //       <Feedbackitem key={item.id} item={item} handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // );
}

export default FeedbackList;
