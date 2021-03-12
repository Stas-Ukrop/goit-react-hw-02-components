import React, { useEffect, useState } from "react";
import Notification from "../Notification";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, title }) => {
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);
  useEffect(() => {
    setTotal(good + neutral + bad);
    if (good === 0) return;
    if (neutral === 0 && bad === 0) return setPositive(100);
    if (neutral !== 0 || bad !== 0)
      return setPositive(Math.round((good / total) * 100));
  }, [good, neutral, bad, total]);
  return (
    <>
      {good || bad || neutral ? (
        <div>
          <h1>{title}</h1>
          <span>Good:{good}</span>
          <br />
          <span>Neutral:{neutral}</span>
          <br />
          <span>Bad:{bad}</span>
          <br />
          <span>Total:{total}</span>
          <br />
          <span>Positive feedback:{positive}</span>
        </div>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
};
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  title: PropTypes.string,
};
