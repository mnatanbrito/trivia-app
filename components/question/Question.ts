type Type = 'boolean';
type Difficulty = 'hard';

export default interface Question {
  category: string;
  type: Type;
  difficulty: Difficulty;
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
}
