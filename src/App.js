import './App.css';
import QuizApp from './components/QuizComponent/QuizApp';
function App() {
  const questions = [
    {
      id: 1,
      statement: `What is the capital of Nigeria?`,
      options: [`New Delhi`, `Abuja`, `Owerri`, `Enugu`],
      answer: `Abuja`
    },
    {
      id: 2,
      statement: `What is the capital of India?`,
      options: [`New Delhi`, `Abuja`, `Mumbai`, `Aba`],
      answer: `New Delhi`
    },
    {
      id: 3,
      statement: `What is the capital of Australia?`,
      options: [`Melbourne`, `Akokwa`, `Owerri`, `Sydney`],
      answer: `Sydney`
    },
    {
      id: 4,
      statement: `What is the capital of Turkey?`,
      options: [`Rijadh`, `Ankara`, `Istanbul`, `Abakaliki`],
      answer: `Ankara`
    },
    {
      id: 5,
      statement: `What is the capital of Syria?`,
      options: [`Syria`, `Damascus`, `Anambra`, `Enugu`],
      answer: `Damascus`
    },


  ]


  return (
    <div className="App">
      <QuizApp questions={questions} />
    </div>
  );
};

export default App;