import { discoverMenu } from 'src/common/localData'
import ActiveLink from '../ActiveLink'
import { NavBarWrapper } from './style'
const NavBar = () => {
  return (
    <NavBarWrapper className="wrap-v1">
      <div className="">
        <div className="TopMenu wrap-v2">
          {discoverMenu.map((item) => {
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
export default NavBar
