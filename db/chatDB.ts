import path from 'path'
import fs from 'fs-extra'

const storeLocation = path.resolve(process.cwd(), './data/chats.json')

async function set(updater: any) {
  const file = await fs.readJSON(storeLocation)
  const newFile = updater(file)
  await fs.writeJSON(storeLocation, newFile)
}

async function get() {
  return await fs.readJSON(storeLocation)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  set,
  get,
}
