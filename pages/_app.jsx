import '../styles/globals.css'
import Header from '../components/header/header.component'
import Footer from '../components/footer/footer.component'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
