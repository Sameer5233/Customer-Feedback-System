import React, { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionRenderer from './components/QuestionRenderer';
import NavigationButtons from './components/NavigationButtons';
import ThankYouScreen from './components/ThankYouScreen';
import ConfirmationDialog from './components/ConfirmationDialog';
import { questions } from './data/questions';
import {
  generateSessionId,
  getSurveyData,
  updateAnswer,
  markCompleted,
} from './utils/localStorage';
import './App.css';

type Screen = 'welcome' | 'survey' | 'confirmation' | 'thankyou';

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('welcome');
  const [sessionId, setSessionId] = useState<string>('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | number>>({});

  useEffect(() => {
    // Load existing session if any
    const existingSession = localStorage.getItem('currentSession');
    if (existingSession) {
      const data = getSurveyData(existingSession);
      if (data && data.status === 'IN_PROGRESS') {
        setSessionId(existingSession);
        setAnswers(data.answers);
        setScreen('survey');
        // Find the last answered question
        const lastAnswered = Math.max(...Object.keys(data.answers).map(Number), 0);
        setCurrentQuestionIndex(lastAnswered);
      }
    }
  }, []);

  const startSurvey = () => {
    const newSessionId = generateSessionId();
    setSessionId(newSessionId);
    localStorage.setItem('currentSession', newSessionId);
    setScreen('survey');
  };

  const handleAnswerChange = (answer: string | number) => {
    const newAnswers = { ...answers, [questions[currentQuestionIndex].id]: answer };
    setAnswers(newAnswers);
    updateAnswer(sessionId, questions[currentQuestionIndex].id, answer);
  };

  const goToNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setScreen('confirmation');
    }
  };

  const goToPrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const skipQuestion = () => {
    goToNext();
  };

  const confirmSubmit = () => {
    markCompleted(sessionId);
    setScreen('thankyou');
    setTimeout(() => {
      resetApp();
    }, 5000);
  };

  const cancelSubmit = () => {
    setScreen('survey');
  };

  const resetApp = () => {
    setScreen('welcome');
    setSessionId('');
    setCurrentQuestionIndex(0);
    setAnswers({});
    localStorage.removeItem('currentSession');
  };

  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = answers[currentQuestion?.id] || null;

  return (
    <div className="app">
      <div className="app-header">
        <div className="header-logo">🏪</div>
        <div className="header-content">
          <h1 className="header-title">Customer Feedback System</h1>
          <p className="header-subtitle">Your opinion drives our improvement</p>
        </div>
      </div>
      
      <div className="survey-container">
        <div className="survey-content">
          {screen === 'welcome' && <WelcomeScreen onStart={startSurvey} />}
          {screen === 'survey' && (
            <>
              <div className="survey-header">
                <h2 className="survey-title">Customer Satisfaction Survey</h2>
              </div>
              <div className="progress-container">
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
                <div className="progress-indicator">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </div>
              </div>
              <QuestionRenderer
                question={currentQuestion}
                answer={currentAnswer}
                onAnswerChange={handleAnswerChange}
              />
              <NavigationButtons
                onPrevious={goToPrevious}
                onNext={goToNext}
                onSkip={skipQuestion}
                isFirst={currentQuestionIndex === 0}
                isLast={currentQuestionIndex === questions.length - 1}
              />
            </>
          )}
          {screen === 'confirmation' && (
            <ConfirmationDialog onConfirm={confirmSubmit} onCancel={cancelSubmit} />
          )}
          {screen === 'thankyou' && <ThankYouScreen />}
        </div>
      </div>
    </div>
  );
};

export default App;
