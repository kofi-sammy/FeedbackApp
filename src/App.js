
import React,{useState} from 'react';
import FeedbackForm from './components/FeedbackForm';
import {v4 as uuidv4} from 'uuid';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import{Routes, Route} from 'react-router-dom';
import About from './Pages/About'


const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback=(id)=>{
    if (window.confirm('Are sure you want want delete this card?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) =>{
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <>
          <Header bgColor='lightgreen' color='white'/>
          <FeedbackForm addHandler={addFeedback}/>
          <FeedbackStats feedback={feedback}/>
            <div className='container'>
              <FeedbackList feedback={feedback}  handleDelete={deleteFeedback}/>
            </div>
             <Routes>
              <Route path="/" element={<App/>} />
              <Route path="/about" element={<About/>} />
            </Routes> 
    </>
    
  );
}

export default App;
