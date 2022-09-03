import React, { FC } from 'react'
import { AppProps } from 'next/app'
import store from '../store'
import { Provider } from 'react-redux'
import Layout from '@/layouts'

import 'antd/dist/antd.css'
import '../styles/reset.css'
import 'normalize.css/normalize.css'
const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>
)

export default App
