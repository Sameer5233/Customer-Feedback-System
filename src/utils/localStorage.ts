export interface SurveyData {
  status: 'IN_PROGRESS' | 'COMPLETED';
  answers: Record<number, string | number>; // questionId: answer
}

export const generateSessionId = (): string => {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export const saveSurveyData = (sessionId: string, data: SurveyData): void => {
  localStorage.setItem(sessionId, JSON.stringify(data));
};

export const getSurveyData = (sessionId: string): SurveyData | null => {
  const data = localStorage.getItem(sessionId);
  return data ? JSON.parse(data) : null;
};

export const updateAnswer = (sessionId: string, questionId: number, answer: string | number): void => {
  const data = getSurveyData(sessionId) || { status: 'IN_PROGRESS', answers: {} };
  data.answers[questionId] = answer;
  saveSurveyData(sessionId, data);
};

export const markCompleted = (sessionId: string): void => {
  const data = getSurveyData(sessionId);
  if (data) {
    data.status = 'COMPLETED';
    saveSurveyData(sessionId, data);
  }
};