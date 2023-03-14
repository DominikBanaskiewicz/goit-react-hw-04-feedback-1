import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions ';
import { Statistics } from './Statiscitcs/Statistics';
import { Notification } from './Notification/Notification';

import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const totalStatsQuantisty = () => {
    return good + neutral + bad;
  };
  const getPositiveFeedbackPercentage = () => {
    if (good === 0) return 0;
    return 100 * (good / totalStatsQuantisty());
  };
  const onClick = evt => {
    if (evt.target.textContent === 'Good') {
      setGood(good + 1);
    }
    if (evt.target.textContent === 'Neutral') {
      setNeutral(neutral + 1);
    }
    if (evt.target.textContent === 'Bad') {
      setBad(bad + 1);
    }
    totalStatsQuantisty();
    getPositiveFeedbackPercentage();
  };

  return (
    <div className="App">
      <FeedbackOptions
        options={{ good, neutral, bad }}
        onLeaveFeedback={onClick}
      ></FeedbackOptions>
      {totalStatsQuantisty() !== 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalStatsQuantisty()}
          positivePercentage={Math.round(getPositiveFeedbackPercentage())}
        ></Statistics>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </div>
  );
};
