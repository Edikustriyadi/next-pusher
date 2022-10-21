import { ReactElement } from 'react'

export default function LayoutHome({ children }: { children: ReactElement }) {
  return (
    <div className="flex justify-center w-full h-screen mt-5">
      <main>{children}</main>
    </div>
  )
}
