import { Provider } from 'react-redux'
import { useStore } from '../store'
import Head from 'next/head'

import '../styles/globals.scss'
import Header from '../components/header/header.component'
import Footer from '../components/footer/footer.component'

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Pizza Stack</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
            rel="stylesheet"
          />
          <meta
            http-equiv="Content-type"
            name="viewport"
            content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width"
          />
        </Head>

        <Header />

        <div className="container">
          <Component {...pageProps} />
        </div>
        <Footer />
      </Provider>
    </>
  )
}

export default MyApp
