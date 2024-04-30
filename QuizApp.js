
import React,{useState} from 'react';
import {QuizData} from "./QuizData"
import "./Quiz.css";

const QuizApp = () => {
  const [question,setQuestion]=useState(0);
  const[score,setScore]=useState(0);
  const[showScore,setShowScore]=useState(false);
  const handleAnswerResponse=(isCorrect)=>{
       if(isCorrect){
        setScore(score+1);
       }
       const nextQues=question+1;
       if(nextQues<QuizData.length){
        setQuestion(nextQues);
       }
       else{
        setShowScore(true);
       }
  }
  const restQuiz=()=>{
    setQuestion(0);
    setScore(0);
    setShowScore(false);
  }
  return (
    <div className='main'>
      {/* <QuizData /> */}
      {
      showScore?(
      <div className='msg'>
        you have score:{score} out of {QuizData.length}
    <>
     <button className='btn2' type="submit" onClick={restQuiz}>play again</button>
    </>
    </div>
        ):(
          <>
          <div className="question">
            <div className='ques-num'>
                      <span>{question+1}</span> /{QuizData.length}
            </div>
              <div className="ques-text">
                     {QuizData[question].question}
              </div>
          </div>
          <div className='answer'>
                  {QuizData[question].options.map((ans)=>(
                     <button className='button' onClick={()=>handleAnswerResponse(ans.isCorrect)}>{ans.answer}</button>
                  ))}
          </div>
          </>
        )
        }
    </div>
  )
}

export default QuizApp;

