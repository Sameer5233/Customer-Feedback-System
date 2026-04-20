import React from 'react';
import type { Question } from '../data/questions';
import RatingComponent from './RatingComponent';
import TextInputComponent from './TextInputComponent';

interface QuestionRendererProps {
  question: Question;
  answer: string | number | null;
  onAnswerChange: (answer: string | number) => void;
}

const QuestionRenderer: React.FC<QuestionRendererProps> = ({
  question,
  answer,
  onAnswerChange,
}) => {
  return (
    <div className="question-container">
      <h2 className="question-text">{question.text}</h2>
      <p className="question-description">
        {question.type === 'rating' && 'Please select your response'}
        {question.type === 'text' && 'Please share your thoughts'}
      </p>
      {question.type === 'rating' && question.scale && (
        <RatingComponent
          scale={question.scale}
          selected={typeof answer === 'number' ? answer : null}
          onSelect={onAnswerChange}
        />
      )}
      {question.type === 'text' && (
        <div className="text-input-container">
          <TextInputComponent
            value={typeof answer === 'string' ? answer : ''}
            onChange={onAnswerChange}
          />
        </div>
      )}
    </div>
  );
};

export default QuestionRenderer;