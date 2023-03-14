export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <h2> Please leave feedback</h2>
      <button onClick={event => onLeaveFeedback(event, 1)}>Good</button>
      <button onClick={event => onLeaveFeedback(event, 1)}>Neutral</button>
      <button onClick={event => onLeaveFeedback(event, 1)}>Bad</button>
    </div>
  );
};
