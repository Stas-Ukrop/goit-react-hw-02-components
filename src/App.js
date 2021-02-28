import React, { useState } from "react";

import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/Buttons";
import Sections from "./components/Sections";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodVoise = () => {
    setGood((good) => good + 1);
  };
  const neuiralVoise = () => {
    setNeutral((neutral) => neutral + 1);
  };
  const badVoise = () => {
    setBad((bad) => bad + 1);
  };
  return (
    <>
      <h1>Please leave feedback</h1>

      <Sections>
        <FeedbackOptions
          good={goodVoise}
          neutral={neuiralVoise}
          bad={badVoise}
        />
        <Statistics
          title="Statistics"
          good={good}
          neutral={neutral}
          bad={bad}
        />
      </Sections>
    </>
  );
};

export default App;
