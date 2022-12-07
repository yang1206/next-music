'use client'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Search from './components/Search'
import Avatar from './components/Avatar'
import { HeaderWrapper } from './style'
import { headerLinks } from 'src/common/localData'

export default function Header() {
  const router = useRouter()
  const isDiscover = router.asPath.includes('discover')
  const showSelectItem = (item: any, index: number): JSX.Element => {
    const discoverActive = item.link === '/' && isDiscover
    const topActive = item.link === router.asPath
    const className = discoverActive || topActive ? 'active' : ''
    if (index < 3) {
      return (
        <Link href={item.link}>
          <span className={className}>
            {item.title}
            <i className="sprite_01 icon"></i>
          </span>
        </Link>
      )
    }
    else {
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
