import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversation';
import toast from 'react-hot-toast';
const SearchInput = () => {
  const [search, setSearch] = useState("");
const {setSelectedConversation}= useConversation();
const { conversations } = useGetConversations()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3) {
      toast.error('Search term must be at least 3 characters long')
    }
    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found")
  }
  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
      <input type='text' placeholder='Search...' className='input input-bordered rounded-full max-[767px]:w-[50%]'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
      <button type='submit' className='btn btn-circle bg-sky-500'><FaSearch /></button>
    </form>
  )
}

export default SearchInput
