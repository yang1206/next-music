import type { FC } from 'react'
import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'
import store from '../store'
import Layout from '@/layouts'
import PlayerBar from '@/components/common/PlayerBar'
import 'antd/dist/antd.css'
import '../styles/reset.css'
import 'normalize.css/normalize.css'
const persistor = persistStore(store)
const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Head>
      <title>Next Music</title>
    </Head>
    <PersistGate loading={null} persistor={persistor}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PersistGate>
    <PlayerBar />
  </Provider>
)

export default App
