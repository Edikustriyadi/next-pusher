import axios from 'axios'
import { GetServerSideProps, NextPage } from 'next'
import Pusher from 'pusher-js'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

Pusher.logToConsole = true

const pusher = new Pusher(`${process.env.NEXT_PUBLIC_PUSHER_KEY}`, {
  cluster: 'ap1',
})

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL

const chatState = {
  name: '',
  message: '',
}

const Index: NextPage = () => {
  const [formChat, setFormChat] = useState(chatState)
  const [chats, setChats] = useState([])

  useEffect(() => {
    const chatChannel = pusher.subscribe('chats')
    fetchChat()
    // receiveUpdateFromPusher
    chatChannel.bind('chat-all', (data: any) => {
      setChats(data.data)
    })
    return () => {
      pusher.unsubscribe('chats')
    }
  }, [])

  const fetchChat = async () => {
    return await axios
      .get(`${BASE_URL}/chat`)
      .then((res) => console.log(res.data))
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault()
    const { name, value } = e.target
    setFormChat((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await axios.post(`${BASE_URL}/chat`, formChat).then((res) => res.data)

    setFormChat(chatState)
  }
  return (
    <div>
      <h1 className="text-center font-bold">Pusher.js and Next.js</h1>
      <h1>Live chats</h1>
      <div
        className="flex flex-col border w-96 h-500 p-2 overflow-auto"
        id="box-chat"
      >
        <ul>
          {chats.map((chat: any, idx: number) => {
            return (
              <li key={idx} className="flex gap-1 items-start mb-2">
                <span className="border px-2 rounded bg-black text-white text-sm">
                  {chat.name}
                </span>
                <span className="text-sm">{chat.message}</span>
              </li>
            )
          })}
        </ul>
      </div>
      <form
        className="flex flex-col mt-2 gap-2"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex flex-col">
          <label>Name:</label>
          <input
            type="name"
            className="border px-2 py-1"
            name="name"
            value={formChat.name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex flex-col">
          <label>Message</label>
          <textarea
            rows={5}
            className="border px-2 py-1"
            name="message"
            value={formChat.message}
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="border p-1 rounded-md bg-green text-white"
        >
          Send
        </button>
      </form>
    </div>
  )
}
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const chatChannel = pusher.subscribe('chats')
//   let chatData = null

//   chatChannel.bind('chat-all', (data: any) => {
//     chatData = data
//   })

//   return {
//     props: { chatData }, // will be passed to the page component as props
//   }
// }
export default Index
