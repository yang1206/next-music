import React, { memo } from 'react'
import NavBar from '@/components/common/NavBar'
import Recommend from '@/components/page/discover/recommend'
const Index: React.FC = () => {
  return (
    <>
      <NavBar />
      <Recommend></Recommend>
    </>
  )
}
export default memo(Index)
