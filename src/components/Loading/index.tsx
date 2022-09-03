import { Spin } from 'antd'
import React from 'react'
import { LoadingWrapper } from './style'

const Loading = ({ tip = 'Loading' }: { tip?: string }) => {
  return (
    <LoadingWrapper>
      <Spin tip={tip} size="large" className="request-loading" />
    </LoadingWrapper>
  )
}

export default Loading
