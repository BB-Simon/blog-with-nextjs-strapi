import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar/Navbar'
import '../styles/index.scss'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
