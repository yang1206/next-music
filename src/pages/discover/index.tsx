import React, { memo } from 'react'
import NavBar from '@/components/common/NavBar'
const Discover: React.FC = () => {
  return (
    <div className="DiscoverWrapper">
      <NavBar />
    </div>
  )
}
export default memo(Discover)
