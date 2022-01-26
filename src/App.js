import React,{useState} from 'react';
import FeedbackForm from './components/FeedbackForm';

import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';



const App = ({}) => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback=(id)=>{
    if (window.confirm('Are sure you want want delete this card?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
 
  return (
    <React.Fragment>
        <Header bgColor='lightgreen' color='white'/>
         <FeedbackForm/>
        <FeedbackStats feedback={feedback}/>
          <div className='container'>
            <FeedbackList feedback={feedback}  handleDelete={deleteFeedback}/>
          </div>
    </React.Fragment>
  );
};

export default App;
