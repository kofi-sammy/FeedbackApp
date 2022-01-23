import React,{useState} from 'react';

import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';



const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <React.Fragment>
        <Header bgColor='lightgreen' color='white'/>
          <div className='container'>
            <FeedbackList feedback={feedback}/>
          </div>
    </React.Fragment>
  );
};

export default App;
