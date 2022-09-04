import React, { memo } from 'react'
import ActiveLink from '../ActiveLink'
import { discoverMenu } from '@/common/localData'
import { NavBarWrapper } from './style'
const NavBar: React.FC = () => {
  return (
    <NavBarWrapper className="wrap-v1">
      <div className="">
        <div className="TopMenu wrap-v2">
          {discoverMenu.map(item => {
            return (
              <div className="item" key={item.title}>
                <ActiveLink href={item.link}>{item.title}</ActiveLink>
              </div>
            )
          })}
        </div>
      </div>
    </NavBarWrapper>
  )
}
export default memo(NavBar)
