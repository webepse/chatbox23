import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Formulaire from './components/Formulaire';
import Message from './components/Message';
import { useParams } from 'react-router-dom';

// firebase
import database from './base';
import { getDatabase, ref, set, remove, onValue } from 'firebase/database';

//animation
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './animation.css'

const App = () => {
  let { login } = useParams()

  const [pseudo, setPseudo] = useState(login)
  const [messages, setMessages] = useState({})
  const nodeRef = useRef()
  const messageRef = useRef()

  useEffect(()=>{
    console.log('test')
    const dbMessagesRef = ref(database, 'messages')
    // écouter d'event de changement des données
    onValue(dbMessagesRef, (snapshot) => {
      const data = snapshot.val()
      if(data)
      {
        setMessages(data)
      }
    })
  },[])

  const addMessage = message => {
    const newMessages = {...messages}
    newMessages[`message-${Date.now()}`] = message
    Object.keys(newMessages).slice(0,-10).forEach(key => {
      newMessages[key] = null
    })
    set(ref(database,'/'),{
      messages: newMessages
    })
  }

  const isUser = myPseudo => myPseudo === pseudo

  const myMessages = Object.keys(messages).map(
    key => (
      <CSSTransition
        key={key}
        timeout={200}
        classNames={'fade'}
        nodeRef={nodeRef}
      >
        <Message 
          isUser={isUser}
          pseudo={messages[key].pseudo}
          message={messages[key].message}
        />
      </CSSTransition>
    )
  )

  return ( 
    <div className="box">
    <div>
      <div className="messages" ref={messageRef}>
        <TransitionGroup className='message'>
          {myMessages}
        </TransitionGroup>
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


