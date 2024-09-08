import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedback, setFeedBack] = useState(() => {
    const savedFeedbackObj = window.localStorage.getItem("feedbackObj");
    if (savedFeedbackObj !== null) {
      return JSON.parse(savedFeedbackObj);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const resetFeedback = () => {
    const resetFeedbackObj = {};
    for (let key in feedback) {
      resetFeedbackObj[key] = 0;
    }
    setFeedBack(resetFeedbackObj);
  };

  const updateFeedback = (feedbackType) => {
    setFeedBack((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  useEffect(() => {
    window.localStorage.setItem("feedbackObj", JSON.stringify(feedback));
  }, [feedback]);

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
  return (
    <>
      <Description />
      <Options
        total={totalFeedback}
        onClick={updateFeedback}
        onReset={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          total={totalFeedback}
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
