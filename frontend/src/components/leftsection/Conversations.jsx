import React from 'react'
import Conversation from './Conversation'
import { getRandomEmoji } from '../../utils/emojis'
import useGetConversations from '../../hooks/useGetConversation'

const Conversations = () => {
const {loading, conversations} = useGetConversations();
  return (
    <div className='py-2 flex flex-col overflow-auto max-[767px]:flex-row' style={{
      scrollbarWidth: 'thin',
      scrollbarColor: '#121212 #555',
    }}>
 {
  conversations.map((conversation, idx) => (
    <Conversation
    key={conversation._id}
    conversation={conversation}
    emoji= {getRandomEmoji()}
    // lastIdx={idx === conversations.length - 1}
    />
  ))
 }
 {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  )
}

export default Conversations;
