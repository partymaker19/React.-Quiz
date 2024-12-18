import React, { useState, useEffect } from 'react';
import './App.css';
const images = import.meta.glob('./assets/*.png', { eager: true });

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  image?: string;
}

const getImage = (fileName: string): string | undefined => {
  const imageEntry = Object.entries(images).find(([path]) =>
    path.includes(fileName)
  );
  return imageEntry ? (imageEntry[1] as { default: string }).default : undefined;
};

const pcQuestions: Question[] = [
  {
    id: 1,
    text: 'Выберите правильный вариант вида компьютера показанного на экране',
    options:  ['Персональной компьютер', 'Ноутбук', 'Персональный ноутбук', 'Мощный компьютер'],
    correctAnswer: 0,
    image: getImage('Рисунок1.png'),
  },
  {
    id: 2,
    text: 'Выберите правильный вариант вида компьютера показанного на экране',
    options: ['Персональной компьютер', 'Монокомп', 'Мононоут', 'Моноблок'],
    correctAnswer: 3,
    image: getImage('Рисунок2.png'),
  },
];

const exampleQuestions: Question[] = [
  {
    id: 1,
    text: 'Столица Франции?',
    options: ['Париж', 'Рим', 'Лондон', 'Мадрид'],
    correctAnswer: 0,
  },
  {
    id: 2,
    text: 'Имя Маска?',
    options: ['Илон', 'Илья', 'Идол', 'Иннокентий'],
    correctAnswer: 0,
  },
];

const App: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(20);
  const [testStarted, setTestStarted] = useState(false);
  const [testFinished, setTestFinished] = useState(false);

  useEffect(() => {
    let timerInterval: ReturnType<typeof setInterval>;
    if (testStarted && timer > 0) {
      timerInterval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else if (timer === 0) {
      handleNextQuestion();
    }
    return () => clearInterval(timerInterval);
  }, [timer, testStarted]);

  const handleStartTest = () => {
    if (selectedTopic === 'Устройство компьютера') {
      setQuestions(pcQuestions);
    } else if (selectedTopic === 'Пример теста') {
      setQuestions(exampleQuestions);
    }
    setTestStarted(true);
    setTestFinished(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimer(20);
  };

  const handleSelectOption = (index: number) => {
    setSelectedOption(index);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestionIndex]?.correctAnswer) {
      setScore((prev) => prev + 1);
    }
    setSelectedOption(null);
    setTimer(20);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setTestStarted(false);
      setTestFinished(true);
    }
  };

  const handleRestartTest = () => {
    setTestFinished(false);
    setTestStarted(false);
    setSelectedTopic(null);
  };

  return (
    <div className="app">
      <img className='img' width={200} height={120} src="../src/assets/Screenshot_2.png" alt="logo" />
      <div className="sidebar" style={{ display: testStarted || testFinished ? 'none' : 'block' }}>
        <h2>Выбрать тест</h2>
        <div className="topic-buttons">
          <button onClick={() => setSelectedTopic('Устройство компьютера')}>Устройство компьютера</button>
          <button onClick={() => setSelectedTopic('Пример теста')}>Пример теста</button>
        </div>
      </div>

      <div className="main">
        {testStarted ? (
          <div className="quiz-container">
            <div className="header">
              <div className="timer-circle">
                <svg width="100" height="100" className="circle-svg">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="black"
                    strokeWidth="5"
                    fill="none"
                    strokeDasharray={2 * Math.PI * 45}
                    strokeDashoffset={(2 * Math.PI * 45 * (20 - timer)) / 20}
                  />
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="timer-text"
                    fontSize="22"
                    fill="black"
                    fontWeight="bold"
                  >
                    {timer}
                  </text>
                </svg>
              </div>
            </div>
            {questions[currentQuestionIndex]?.image && (
              <img
                src={questions[currentQuestionIndex].image}
                alt="Question related"
                className="question-image"
                width={400}
                height={300}
              />
            )}

            <h3>{questions[currentQuestionIndex]?.text}</h3>

            <div className="options">
              {questions[currentQuestionIndex]?.options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button ${selectedOption === index ? 'selected' : ''}`}
                  onClick={() => handleSelectOption(index)}
                  disabled={selectedOption !== null}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Кнопка "Вернуться" только для теста "Пример теста" */}
            {selectedTopic === 'Пример теста' && (
              <button className="back-button" onClick={handleRestartTest}>
                Вернуться
              </button>
            )}
          </div>
        ) : selectedTopic && !testFinished ? (
          <button className="start-button" onClick={handleStartTest}>
            Старт теста
          </button>
        ) : testFinished ? (
          <div className="result">
            <h2>Тест пройден!</h2>
            <p>Твой результат: {score} / {questions.length}</p>
            <button className="restart-button" onClick={handleRestartTest}>
              Вернуться
            </button>
          </div>
        ) : (
          <p>Пожалуйста, выберите тему, чтобы начать.</p>
        )}
      </div>
    </div>
  );
};

export default App;
