import React, { useState, useEffect } from 'react';
import './App.css';
import logo from "./assets/Screenshot_2.png";
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
  {
    id: 3,
    text: 'Выберите правильный вариант вида компьютера показанного на экране',
    options: ['Ноутбук', 'Нетбук', 'Неттоп', 'Нитбук'],
    correctAnswer: 1,
    image: getImage('Рисунок3.png')
  },
  {
    id: 4,
    text: 'Выберите правильный вариант вида компьютера показанного на экране',
    options: ['Телефон', 'Андроид', 'Смартфон', 'Айфон'],
    correctAnswer: 2,
    image: getImage('Рисунок4.png')
  },
  {
    id: 5,
    text: 'Выберите правильный вариант вида компьютера показанного на экране',
    options: ['Монитор', 'Неттоп', 'Моноблок', 'Системный блок'],
    correctAnswer: 1,
    image: getImage('Рисунок5.png')
  },
  {
    id: 6,
    text: 'Выберите правильный вариант вида компьютера показанного на экране',
    options: ['Микросхема', 'Одноплатный компьютер', 'Материнская плата', 'Плата'],
    correctAnswer: 1,
    image: getImage('Рисунок6.png')
  },
  {
    id: 7,
    text: 'Выберите правильный вариант вида компьютера показанного на экране',
    options: ['Сервер', 'Суперсервер', 'Суперкомпьютер', 'Персональный компьютер'],
    correctAnswer: 2,
    image: getImage('Рисунок7.png')
  },
  {
    id: 8,
    text: 'Клавиатура - устройство ввода или вывода?',
    options: ['ввода', 'вывода'],
    correctAnswer: 0,
    image: getImage('Рисунок8.png')
  },
  {
    id: 9,
    text: 'Монитор - устройство ввода или вывода?',
    options: ['ввода', 'вывода'],
    correctAnswer: 1,
    image: getImage('Рисунок9.png')
  },
  {
    id: 10,
    text: 'Сканер - устройство ввода или вывода?',
    options: ['ввода', 'вывода'],
    correctAnswer: 0,
    image: getImage('Рисунок10.png')
  },
  {
    id: 11,
    text: 'Принтер - устройство ввода или вывода?',
    options: ['ввода', 'вывода'],
    correctAnswer: 1,
    image: getImage('Рисунок11.png')
  },
  {
    id: 12,
    text: 'Проектор - устройство ввода или вывода?',
    options: ['ввода', 'вывода'],
    correctAnswer: 1,
    image: getImage('Рисунок12.png')
  },
  {
    id: 13,
    text: 'Название компонента системного блока показанного на экране?',
    options: ['Кулер', 'Процессор', 'Материнская плата', 'Видеокарта'],
    correctAnswer: 1,
    image: getImage('Рисунок13.png')
  },
  {
    id: 14,
    text: 'Название компонента системного блока показанного на экране?',
    options: ['Материнская плата', 'Процессор', 'Оперативная память', 'Жесткий диск'],
    correctAnswer: 0,
    image: getImage('Рисунок14.png')
  },
  {
    id: 15,
    text: 'Название компонента системного блока показанного на экране?',
    options: ['Материнская плата', 'Процессор', 'Оперативная память', 'Блок питания'],
    correctAnswer: 2,
    image: getImage('Рисунок15.png')
  },
  {
    id: 16,
    text: 'Название компонента системного блока показанного на экране?',
    options: ['Блок питания', 'DVD-привод', 'Оперативная память', 'Кулер'],
    correctAnswer: 3,
    image: getImage('Рисунок16.png')
  },
  {
    id: 17,
    text: 'Название компонента системного блока показанного на экране?',
    options: ['Блок питания', 'Системный блок', 'Корпус', 'Кулер'],
    correctAnswer: 0,
    image: getImage('Рисунок17.png')
  },
  {
    id: 18,
    text: 'Название компонента системного блока показанного на экране?',
    options: ['Блок питания', 'Видеокарта', 'Оперативная память', 'Жесткий диск'],
    correctAnswer: 1,
    image: getImage('Рисунок18.png')
  },
  {
    id: 19,
    text: 'Название компонента системного блока показанного на экране?',
    options: ['Блок питания', 'Видеокарта', 'Оперативная память', 'Жесткий диск'],
    correctAnswer: 3,
    image: getImage('Рисунок19.png')
  },
  {
    id: 20,
    text: 'Название компонента системного блока показанного на экране?',
    options: ['Блок питания', 'Видеокарта', 'DVD-привод', 'Жесткий диск'],
    correctAnswer: 2,
    image: getImage('Рисунок20.png')
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

  // Функция для перемешивания массива
const shuffleArray = (array: Question[]): Question[] => {
  const shuffled = [...array]; // Создаем копию массива
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Случайный индекс
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Меняем местами элементы
  }
  return shuffled;
};



const handleStartTest = () => {
  let selectedQuestions: Question[] = [];
  if (selectedTopic === 'Устройство компьютера') {
    selectedQuestions = pcQuestions;
  } else if (selectedTopic === 'Пример теста') {
    selectedQuestions = exampleQuestions;
  }

  const shuffledQuestions = shuffleArray(selectedQuestions);

    setQuestions(shuffledQuestions);
    setTestStarted(true);
    setTestFinished(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimer(15);
  };

  const handleSelectOption = (index: number) => {
    setSelectedOption(index);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestionIndex]?.correctAnswer) {
      setScore((prev) => prev + 1);
    }
    setSelectedOption(null);
    setTimer(15);
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
      <img className='img' width={200} height={120} src={logo} alt="logo" />
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
                    strokeDashoffset={(2 * Math.PI * 45 * (15 - timer)) / 15}
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
                width={500}
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
            <p>Твой результат: {score} правильный(х) ответа(ов) / из {questions.length} вопросов</p>
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
