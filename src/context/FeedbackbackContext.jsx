import { createContext,useState, useEffect} from "react";
import {v4 as uuidv4} from 'uuid';


import axios from "axios";

const api = axios.create({
  baseURL:`http://localhost:5000/feedback`,
  timeout: 5000
})

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const[feedbackEdit, setFeedbackEdit] = useState({
      item:{},
      edit: false
    })

    useEffect(() => {
      getFeedback()
    }, []);

    //Getting Data from the server

    const getFeedback = async () => {

      try {
          let res = await api.get('/t');
          setFeedback(res.data);
          setIsLoading(false)
      } catch(err){
       console.log(err.res.data)
       console.log(err.res.status)
       console.log(err.res.header)
     }
     
    }
    
    //Delete Feedback
    const deleteFeedback=(id)=>{
        if (window.confirm('Are sure you want want delete this card?')) {
          setFeedback(feedback.filter((item) => item.id !== id))
        }

      }
       //Update feedback item
        const updateFeedback =(id,updateItem)=>{
         setFeedbackEdit(
           feedback.map((item)=>(item.id === id ?  {...item, ...updateItem}:item))
         )
        }

      //Updating Edit Feedback
      const editFeedbackHandler= (item) =>{
         setFeedbackEdit({
           item,
           edit: true
         })
      }

      //Add Feedback
      const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
      }
    
    return <FeedbackContext.Provider value ={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback, 
        addFeedback,
        editFeedbackHandler,
        updateFeedback
    }} >
    {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;