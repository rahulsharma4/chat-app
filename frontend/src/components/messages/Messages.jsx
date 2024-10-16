import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetConversation'
import MessageSkeleton from '../../skeletons/MessageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';
import useConversation from '../../zustand/useConversation';
const Messages = () => {
  const {conversations, loading} = useGetMessages();
  const {messages}=useConversation();
  console.log(conversations,"ddddddd",messages)
  useListenMessages();
  const lastMessageRef = useRef();
  useEffect(() =>{
    setTimeout(() =>{
      lastMessageRef.current?.scrollIntoView({behavior:"smooth"})
    }, 100)
  }, [messages])
  return (
    <div className='px-4 flex-1 overflow-auto' style={{
      scrollbarWidth: 'thin',
      scrollbarColor: '#121212 #555',
    }}>

      {!loading && messages.length > 0 && 
      messages.map((message) =>
      <div key={message._id} ref={lastMessageRef}>
<Message message={message}/>
      </div>
)}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx}/>)}

      {!loading && messages.length === 0 && (
        <p className='text-center text-white'>Send a message to start the conversation</p>
      )}
    </div>
  )
}

export default Messages
