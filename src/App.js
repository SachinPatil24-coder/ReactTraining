import React, { useEffect, useState } from 'react';
import './App.css';
import Question from './components/Quiz/Question';
import NewQuestions from './components/NewQuestions/NewQuestions';
import MainHeader from './components/MainHeader/MainHeader';
import Login from './components/Login/Login';
import ErrorModel from './components/UI/ErrorModel';

const initquestion = [
  {
    id: 1,
    question: `What is the capital of Nigeria?`,
    option1: `New Delhi`,
    option2: "Enugu",
    option3: "Abuja",
    option4: "Owerri",
    category: 'General',
    answer: `Abuja`
  },
  {
    id: 2,
    question: `What is the capital of India?`,
    option1: `New Delhi`,
    option2: "Enugu",
    option3: "Abuja",
    option4: "Owerri",
    category: 'General',
    answer: `New Delhi`
  },
  {
    id: 3,
    question: `What is the capital of Australia?`,
    option1: `New Delhi`,
    option2: "Melbourne",
    option3: "Sydney",
    option4: "Akokwa",
    category: 'General',
    answer: `Sydney`
  },
  {
    id: 4,
    question: `What is the capital of Turkey?`,
    option1: `New Delhi`,
    option2: "Rijadh",
    option3: "Ankara",
    option4: "Ankara",
    category: 'General',
    answer: `Ankara`
  },
  {
    id: 5,
    question: `What is the capital of Syria?`,
    option1: `Syria`,
    option2: "Damascus",
    option3: "Abuja",
    option4: "Enugu",
    category: 'General',
    answer: `Damascus`
  },


]

function App() {
  const [question, setquestion] = useState(initquestion);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({role:""});
  const [error, setError] = useState();

  const users = [
    { id: 1, name: 'Pankaj', email: 'pankaj@gmail.com', password: '1234', role: 'trainer' },
    { id: 2, name: 'Sachin', email: 'sachin@gmail.com', password: '12345', role: 'trainee' },
  ]


  useEffect(() => {
    const userLoggedInStatus = localStorage.getItem("isLoggedIn");
    if (userLoggedInStatus === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const addQuestionHandler = (question) => {
    setquestion((prevState) => {
      return [question, ...prevState]
    })
  }

  const loginHandler = (email, password) => {
    const filteredUsers = users.filter((user) => {
      return user.email === email.trim();
    })
    const user = filteredUsers[0];
    if (user !== undefined && user.password === password.trim()) {
      localStorage.setItem("isLoggedIn", "1");
      localStorage.setItem("loggedInUserName", user.password);
      localStorage.setItem("loggedInUserRole", user.role)
      setIsLoggedIn(true);
      setLoggedInUser({role:user.role});
    } else {
      setError({
        title: "Invalid ",
        message: "Please enter valid username or password"
      })
    }

  }
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUserName");
    localStorage.removeItem("loggedInUserRole");
    setIsLoggedIn(false);
  }
const errorHandler=()=>{
  setError(null);
}

  return (
    <React.Fragment >
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && loggedInUser.role === "trainer" && < NewQuestions addQuestion={addQuestionHandler} onLogout={logoutHandler} />}
        {/* <Question question={question} onLogout={logoutHandler} /> */}
        {isLoggedIn && <Question question={question} onLogout={logoutHandler} />}
        {error && <ErrorModel onConfirm={errorHandler} title={error.title} message={error.message}/>}
      </main>
    </React.Fragment>

  );
};

// && loggedInUser.role === "trainer"
//localStorage.getItem("loggedInUserRole") === "trainer"&& 
//&& localStorage.getItem("loggedInUserRole") === "trainer" &&

export default App;