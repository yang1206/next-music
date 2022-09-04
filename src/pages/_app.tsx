import React, { FC } from 'react'
import { AppProps } from 'next/app'
import store from '../store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'
import Layout from '@/layouts'
import PlayerBar from '@/components/common/PlayerBar'
import 'antd/dist/antd.css'
import '../styles/reset.css'
import 'normalize.css/normalize.css'
let persistor = persistStore(store)
const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PersistGate>
    <PlayerBar />
  </Provider>
)

export default App
