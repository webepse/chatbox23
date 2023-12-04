import React, { useState } from 'react';
import './App.css';
import Formulaire from './components/Formulaire';
import Message from './components/Message';
import { useParams } from 'react-router-dom';

const App = () => {
  let { login } = useParams()

  const [pseudo, setPseudo] = useState(login)
  const [messages, setMessages] = useState({})

  const addMessage = message => {
    const newMessages = {...messages}
    newMessages[`message-${Date.now()}`] = message
    setMessages(newMessages)
  }

  const myMessages = Object.keys(messages).map(
    key => (
      <Message 
        key={key}
        pseudo={messages[key].pseudo}
        message={messages[key].message}
      />
    )
  )

  return ( 
    <div className="box">
    <div>
      <div className="messages">
        {myMessages}
      </div>
    </div>
    <Formulaire 
      pseudo={pseudo}
      addMessage={addMessage}
      length={140}
    />
  </div>
   );
}
 
export default App;


