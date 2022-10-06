import React from 'react';
import { useContext } from 'react';
import Feedbackitem from './Feedbackitem';
import FeedbackContext from '../context/FeedbackContext';
import Spinner from './shared/Spinner';

//feedback is the data state name from the App()
function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
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
