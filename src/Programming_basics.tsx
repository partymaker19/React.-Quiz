import React, { useState, useEffect } from "react";

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  image?: string;
}

export const programmingQuestions: Question[] = [
  {
    id: 1,
    text: "Что такое алгоритм?",
    options: [
      "Набор случайных действий для решения задачи",
      "Последовательность действий, выполняемых в произвольном порядке",
      "Четкая и понятная последовательность шагов для решения задачи",
      "Программа, написанная на любом языке программирования",
    ],
    correctAnswer: 2,
  },
  {
    id: 2,
    text: "Что такое программа?",
    options: [
      "Последовательность команд, выполняемая компьютером",
      "Любой текст, написанный на компьютере",
      "Совокупность алгоритмов, не требующих исполнения",
      "Описание работы компьютера на естественном языке",
    ],
    correctAnswer: 0,
  },
  {
    id: 3,
    text: "Что такое подпрограмма?",
    options: [
      "Отдельная независимая программа, работающая без основной",
      "Часть программы, выполняющая определенную задачу и вызываемая из основной программы",
      "Любой фрагмент кода, написанный внутри программы",
      "Файл, содержащий код программы",
    ],
    correctAnswer: 1,
  },
  {
    id: 4,
    text: "Кто такой программист?",
    options: [
      "Человек, который пользуется компьютером для работы",
      "Специалист, создающий и отлаживающий программы",
      "Пользователь, умеющий устанавливать программы",
      "Человек, работающий за компьютером в любой сфере",
    ],
    correctAnswer: 1,
  },
  {
    id: 5,
    text: "Что такое переменная в программировании?",
    options: [
      "Число, которое нельзя изменить",
      "Имя, обозначающее область памяти, где хранится значение",
      "Команда, выполняющая определенное действие",
      "Любая строка текста в программе",
    ],
    correctAnswer: 1,
  },
  {
    id: 6,
    text: "Что такое функция в программировании?",
    options: [
      "Программа, которая управляет компьютером",
      "Группа команд, объединенных под одним именем и выполняющих задачу",
      "Любая строка кода в программе",
      "Название файла с кодом",
    ],
    correctAnswer: 1,
  },
  {
    id: 7,
    text: "Что такое оператор в программировании?",
    options: [
      "Специальный символ или команда, выполняющая операцию",
      "Человек, управляющий программой",
      "Любая строка кода",
      "Файл с программным кодом",
    ],
    correctAnswer: 0,
  },
  {
    id: 8,
    text: "Что такое код программы?",
    options: [
      "Последовательность случайных символов",
      "Четко прописанные инструкции для компьютера",
      "Любой текст, написанный в блокноте",
      "Изображение интерфейса программы",
    ],
    correctAnswer: 1,
  },
  {
    id: 9,
    text: "Что такое язык программирования?",
    options: [
      "Любой иностранный язык, используемый в IT",
      "Набор команд и правил для написания программ",
      "Программа для перевода текста на другие языки",
      "Совокупность картинок и звуков в приложении",
    ],
    correctAnswer: 1,
  },
  {
    id: 10,
    text: "Что такое цикл в программировании?",
    options: [
      "Команда для завершения работы программы",
      "Повторение действий до выполнения условия",
      "Последовательность случайных команд",
      "Описание программы словами",
    ],
    correctAnswer: 1,
  },
  {
    id: 11,
    text: "Для чего нужны комментарии в коде?",
    options: [
      "Для выполнения программой дополнительных действий",
      "Для объяснения кода разработчикам",
      "Для ускорения работы программы",
      "Чтобы скрыть ошибки в коде",
    ],
    correctAnswer: 1,
  },
  {
    id: 12,
    text: "Что такое условие в программировании?",
    options: [
      "Любой текст, записанный в программе",
      "Проверка истинности выражения для принятия решения",
      "Описание алгоритма словами",
      "Последовательность случайных действий",
    ],
    correctAnswer: 1,
  },
  {
    id: 13,
    text: " Какой результат выполнения оператора “if” в программировании?",
    options: [
      "Запуск программы",
      "Проверка условия и выполнение определенных действий",
      "Перезапуск системы",
      "Завершение программы",
    ],
    correctAnswer: 1,
  },
  {
    id: 14,
    text: " Что такое компилятор?",
    options: [
      "Устройство для программирования",
      "Человек, который пишет код",
      "Среда для создания дизайна программ",
      "Программа, переводящая исходный код в машинный",
    ],
    correctAnswer: 3,
  },
  {
    id: 15,
    text: "Что такое интерпретатор?",
    options: [
      "Средство для отладки программ",
      "Программа, создающая графические интерфейсы",
      "Программа, выполняющая код построчно",
      "Файл с программным кодом",
    ],
    correctAnswer: 2,
  },
  {
    id: 16,
    text: "Что такое логическая ошибка в программе?",
    options: [
      "Ошибка, при которой программа работает, но результат неверный",
      "Ошибка, из-за которой программа не запускается",
      "Ошибка, возникающая при установке программы",
      "Ошибка в работе операционной системы",
    ],
    correctAnswer: 0,
  },
  {
    id: 17,
    text: "Что такое IDE (интегрированная среда разработки)?",
    options: [
      "Компьютер для программиста",
      "Программа, в которой можно писать, отлаживать и запускать код",
      "Файл с исходным кодом программы",
      "Язык программирования",
    ],
    correctAnswer: 1,
  },
  {
    id: 18,
    text: "Что делает оператор “return” в функции?",
    options: [
      "Завершает выполнение всей программы",
      "Запускает новую программу",
      "Прерывает выполнение цикла",
      "Возвращает значение из функции",
    ],
    correctAnswer: 3,
  },
  {
    id: 19,
    text: "Что такое тип данных?",
    options: [
      "Класс в объектно-ориентированном программировании",
      "Характеристика переменной, определяющая, какие значения она может хранить",
      "Способ хранения данных на жестком диске",
      "Программа для обработки информации",
    ],
    correctAnswer: 1,
  },
  {
    id: 20,
    text: "Что такое массив?",
    options: [
      "Число, которое постоянно изменяется",
      "Алгоритм для выполнения повторяющихся действий",
      "Структура данных, хранящая несколько значений под одним именем",
      "Графическое изображение данных",
    ],
    correctAnswer: 2,
  },
];

interface ProgrammingBasicsProps {
  onRestart: () => void;
}

const ProgrammingBasics: React.FC<ProgrammingBasicsProps> = ({ onRestart }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(300); // 5 минут
  const [testFinished, setTestFinished] = useState(false);

  useEffect(() => {
    let timerInterval: ReturnType<typeof setInterval>;
    if (timer > 0) {
      timerInterval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else {
      setTestFinished(true); // Завершаем тест, если время истекло
    }
    return () => clearInterval(timerInterval);
  }, [timer]);

  const handleSelectOption = (index: number) => {
    setSelectedOption(index);

    setTimeout(() => {
      if (index === programmingQuestions[currentQuestionIndex]?.correctAnswer) {
        setScore((prev) => prev + 1);
      }
      if (currentQuestionIndex < programmingQuestions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        setTestFinished(true); // Завершаем тест, если вопросы закончились
      }
      setSelectedOption(null);
    }, 500);
  };

  return (
    <div className="quiz-container">
      {!testFinished ? (
        <>
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
                  strokeDashoffset={(2 * Math.PI * 45 * (300 - timer)) / 300}
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
                  {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")}
                </text>
              </svg>
            </div>
          </div>
          <h3>{programmingQuestions[currentQuestionIndex]?.text}</h3>
          <div className="options">
            {programmingQuestions[currentQuestionIndex]?.options.map(
              (option, index) => (
                <button
                  key={index}
                  className={`option-button ${
                    selectedOption === index ? "selected" : ""
                  }`}
                  onClick={() => handleSelectOption(index)}
                  disabled={selectedOption !== null}
                >
                  {option}
                </button>
              )
            )}
          </div>
        </>
      ) : (
        <div className="result">
          <h2>Тест завершен!</h2>
          <p>
            Ваш результат: {score} правильный(х) ответа(ов) из{" "}
            {programmingQuestions.length}.
          </p>
          <button onClick={onRestart}>Вернуться</button>
        </div>
      )}
    </div>
  );
};

export default ProgrammingBasics;
