
import React from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';

// import{Routes, Route} from 'react-router-dom';
// import About from './Pages/About'
import { FeedbackProvider } from './context/FeedbackbackContext';


const App = () => {
  return (
    <FeedbackProvider>
   
          <Header bgColor='lightgreen' color='white'/>
          <FeedbackForm />
          <FeedbackStats />
            <div className='container'>
              <FeedbackList />
            </div>
             {/* <Routes>
              <Route path="/" element={<App/>} />
              <Route path="/about" element={<About/>} />
            </Routes>  */}
    
    </FeedbackProvider>
    
  );
}

export default App;
