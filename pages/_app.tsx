import '../styles/globals.css'
import type { AppProps } from 'next/app'
import LayoutHome from '../layouts/LayoutHome'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutHome>
      <Component {...pageProps} />
    </LayoutHome>
  )
}

export default MyApp
