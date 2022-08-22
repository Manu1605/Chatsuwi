import { query, collection, onSnapshot, orderBy } from "firebase/firestore";
import {db} from '../Firebase/firebase'
import React, {useState, useEffect, useRef} from "react";
import Message from "./Message";
import SendMessage from "../SendMessage/SendMessage";
import Loading from "../Loading/Loading";

const style = {
  main: "flex flex-col p-[10px] relative pb-16 pt-32 ",
};
function Chat() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const scroll = useRef()

  useEffect(() => {
    setLoading(true)
    const q = query(collection(db, 'messages'), orderBy('timestamp'))
    const unsuscribe = onSnapshot(q, (querySnapshot) =>{
      let messages = []
      querySnapshot.forEach((doc) =>{
        messages.push({...doc.data(), id:doc.id})
      })
      setMessages(messages)
      setLoading(false)
    })
    return () => unsuscribe()
  },[])
  return (
    <>
    {loading 
    ? <Loading /> :
    <> 
      <main className={style.main}>
        {messages && messages.map(message =>(
          <Message key={message.id} message={message} />
        ))}
        
      </main>
      <SendMessage scroll={scroll} />
      <span ref={scroll}></span>
      </> }
      
    </>
  );
}

export default Chat;
