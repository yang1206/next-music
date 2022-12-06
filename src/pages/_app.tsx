import type { FC } from 'react'
import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import store from '../store'
import Layout from '@/layouts'
import PlayerBar from '@/components/common/PlayerBar'
import 'antd/dist/antd.css'
import '../styles/reset.css'
import 'normalize.css/normalize.css'
const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Head>
      <title>Next Music</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    <PlayerBar />
  </Provider>
)

export default App
