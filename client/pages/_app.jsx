import { Provider } from 'react-redux'
import Layout from '../src/components/Layout'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from '../src/redux';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
