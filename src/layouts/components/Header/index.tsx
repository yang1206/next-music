import Link from 'next/link'
import { useRouter } from 'next/router'
import Search from './components/Search'
import Avatar from './components/Avatar'
import { headerLinks } from '@/common/localData'
import { HeaderWrapper } from './style'

export default function Header() {
  const router = useRouter()
  let isDiscover = router.asPath.indexOf('discover') !== -1
  const showSelectItem = (item: any, index: number): JSX.Element => {
    let discoverActive = item.link == '/' && isDiscover
    let topActive = item.link === router.asPath
    const className = discoverActive || topActive ? 'active' : ''
    if (index < 3) {
      return (
        <Link href={item.link}>
          <a className={className}>
            {item.title}
            <i className="sprite_01 icon"></i>
          </a>
        </Link>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }
  return (
    <HeaderWrapper>
      <div className="content">
        <div className="HeaderLeft">
          <div className="logo sprite_01"></div>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div className="select-item" key={item.title}>
                  {showSelectItem(item, index)}
                </div>
              )
            })}
          </div>
        </div>
        <div className="HeaderRight">
          <Search />
          <div className="center">创作者中心</div>
          <Avatar />
        </div>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}
