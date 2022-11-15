import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import {auth, db} from '../Firebase/firebase'
import enviar from '../img/send.png'

const style = {
  form: ' h-14 w-full flex text-xl absolute bottom-0 gap-8',
  input: 'fixed h-14 bottom-0 w-[78%] text-xl ml-4  p-3 bg-white text-black  shadow-xl border-none outline-black-100 mb-1 rounded-md',
  button: 'fixed text-white text-2xl font-semibold bottom-0 right-3 mb-1 h-14 w-[20%] bg-sky-400 flex items-center hover:bg-sky-300 justify-center rounded-md'
}
const SendMessage =({scroll}) => {
  const [input, setInput] = useState('')
  const sendMessage = async (e) =>{
    e.preventDefault()
    if (input === '') {
      alert('Please enter a message')
      return
    }
    const {uid, displayName} = auth.currentUser
    await addDoc(collection(db, 'messages'),{
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp()
    })
    setInput('')
    scroll.current.scrollIntoView({behavior: 'smooth'})
  }
  return (
    <form onSubmit={sendMessage} className={style.form}>
      <input autoFocus value={input} onChange={(e)=> setInput(e.target.value)} className={style.input} type="text" placeholder='Mensaje' />
      <button className={style.button} type="submit"><img src={enviar} width={55}/></button>
    </form>
  )
}

export default SendMessage