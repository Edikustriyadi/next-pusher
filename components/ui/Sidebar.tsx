import React from 'react'

export default function Sidebar() {
  return (
    <div className="flex flex-col w-full bg-green min-h-screen">
      <div className="flex flex-col justify-center items-center h-24 gap-2 mt-2">
        <div className="flex flex-col justify-center items-center w-14 h-14 bg-blue rounded-full">
          <span className="text-grey">EK</span>
        </div>
        <h1 className="text-blue text-lg">Edi Kustriyadi</h1>
      </div>
      <h1 className="text-grey p-4">Chats</h1>

      <ul className="px-1">
        <li className="flex justify-center items-center rounded-md px-3 py-2 gap-2 active:bg-black hover:bg-black hover:opacity-80 mb-4">
          <div className="flex justify-center items-center w-10 h-8 rounded-full bg-blue">
            <span className="text-grey text-sm">BH</span>
          </div>
          <div className="flex justify-between items-start w-full">
            <div className="flex flex-col w-9/12 ">
              <span className="text-blue font-medium text-md">
                Budi Herdiana
              </span>
              <span className="text-white text-sm">Hi Edi! Where are you?</span>
            </div>
            <div className="w-4/12">
              <span className="text-xs text-blue">5:00 AM</span>
            </div>
          </div>
        </li>
        <li className="flex justify-center items-center rounded-md px-3 py-2 gap-2 active:bg-black hover:bg-black hover:opacity-80 mb-4">
          <div className="flex justify-center items-center w-10 h-8 rounded-full bg-blue">
            <span className="text-grey text-sm">BH</span>
          </div>
          <div className="flex justify-between items-start w-full">
            <div className="flex flex-col w-9/12 ">
              <span className="text-blue font-medium text-md">
                Budi Herdiana
              </span>
              <span className="text-white text-sm">Hi Edi! Where are you?</span>
            </div>
            <div className="w-4/12">
              <span className="text-xs text-blue">5:00 AM</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
