// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Pusher from 'pusher'
import chatDB from '../../db/chatDB'

const pusher = new Pusher({
  appId: `${process.env.NEXT_PUBLIC_PUSHER_APP_ID}`,
  key: `${process.env.NEXT_PUBLIC_PUSHER_KEY}`,
  secret: `${process.env.NEXT_PUBLIC_PUSHER_SECRET}`,
  cluster: `${process.env.NEXT_PUBLIC_PUSHER_CLUSTER}`,
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      return GET(req, res)
      break
    case 'POST':
      const { name, message } = req.body
      const newChat = { name, message }
      await chatDB.set((old: any) => {
        return {
          data: [...old.data, newChat],
        }
      })
      GET(req, res)
      res.status(201).json(newChat)
    default:
      break
  }
}

async function GET(req: NextApiRequest, res: NextApiResponse) {
  const result = await chatDB.get()
  await pusher.trigger('chats', 'chat-all', result)
  res.status(200).json({})
}
