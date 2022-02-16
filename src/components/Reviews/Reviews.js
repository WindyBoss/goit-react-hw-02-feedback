import { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

class CollectReviews extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  changeState = evt => {
    const { value } = evt.target;
    this.setState(prevState => ({
      [value]: prevState[value] + 1
    }))
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };


  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    return Math.round((good / (good + neutral + bad) * 10000)) / 100;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (

      <div>
        <Section title="Please Leave Feedback">
          <FeedbackOptions onLeaveFeedback={this.changeState}></FeedbackOptions>
        </Section>

        {
          isNaN(positivePercentage) ?
          <Notification message={'There is no feedback'}/> :
          <Section title="Statistics">
            <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}></Statistics>
          </Section>
        }

      </div>
    );
  };
};


export default CollectReviews;
