import React, { useState } from 'react';
import styles from './App.module.css';
import Main from './components/Main/Main';
import welcome from './images/welcome.svg'
import loader from './images/loader.svg'
import githubIcon from './images/github.svg'
import { FetchData } from './API'
import firebase from './firebase'

type Question = {
  category: string
  correct_answer: string
  incorrect_answers: string[]
  difficulty: string
  question: string
  type: string 
}

const App = () => {

  // firebase
  const messaging = firebase.messaging()
  messaging.requestPermission().then(() => {
    return messaging.getToken()
  }).then((token:any) => {
    console.log('token', token)
  })

  const [start, setStart] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Question[]>([])
  const [number, setNumber] = useState(0)

  // Start Quiz
  const handleClick = async () => {
    setStart(true)
    setLoading(true)

    const data = await FetchData()
    setData(data)
    setLoading(false)

  }

  // shuffle answers
  const answers = (array: any[]) => [...array].sort(() => Math.random() - 0.5)


  return (
    <div className={styles.container}>

      {/* github */}
      <div className={styles.github}>
        <a href="https://github.com/7-baig/Quiz-App"><img src={githubIcon} alt="githubIcon"/></a>
      </div>

      {/* Start Button */}
        { !start 
        ? 
        <div className={styles.welcome}>
        <img src={welcome} />
        <button onClick={handleClick}>Start Quiz</button>
        </div>
        : null }

      {/* Loading */}
      {
        loading
        ?
        <div className={styles.loading}>
          <img src={loader} />
          <p>One moment...</p>
        </div>
        :
        null
      }

      {/* Game Card */}
        { 
          start && !loading
          ? 
          <Main 
            question={data[number].question}
            setNumber={setNumber}
            number={number}
            answers={answers([...data[number].incorrect_answers, data[number].correct_answer])}
            questionNm={number + 1}
            correctAnswer={data[number].correct_answer}
            startQuiz={handleClick}
          /> 
          : null 
        }

    </div>
  );
}

export default App;
