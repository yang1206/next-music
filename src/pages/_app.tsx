import type { FC } from 'react'
import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import PlayerBar from 'src/components/common/PlayerBar'
import { wrapper } from '../store'
import Layout from '@/layouts/layout'
import 'antd/dist/antd.css'
import '../styles/reset.css'
import 'normalize.css/normalize.css'
const App: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest)
  return (

    <Provider store={store}>
      <Head>
        <title>Next Music</title>
      </Head>
      <Layout>
        <Component {...props.pageProps} />
      </Layout>
      <PlayerBar />
    </Provider>
  )
}

export default App
