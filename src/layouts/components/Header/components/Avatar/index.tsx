'use client'
import type { MenuProps } from 'antd'
import { Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { DropdownWrapper } from './style'
import { clearLoginState } from 'src/utils/secretKey'
import { useAppDispatch, useAppSelector } from 'src/hooks/useStore'
import { changeIsVisible, selectIsVisible, selectLoginState, selectProfile } from 'src/store/slice/Login'
import Login from 'src/components/common/Login'
export default function Avatar() {
  const dispatch = useAppDispatch()
  const isLogin = useAppSelector(selectLoginState).data
  const isVisible = useAppSelector(selectIsVisible).data
  const profile = useAppSelector(selectProfile).data

  // 用户下拉JSX
  // 登陆后
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link rel="noopener noreferrer" href="/user">
          {profile.nickname}
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link rel="noopener noreferrer" href="/user">
          我的主页
        </Link>
      ),
    },
    {
      key: '3',
      className: 'logout',
      danger: true,
      label: '退出登录',
      onClick: () => clearLoginState(),
    },
  ]
  const showProfileContent = () => {
    return <img src={profile.avatarUrl} alt="" className="profile-img" />
  }
  return (
    <DropdownWrapper>
      {isLogin
        ? (
          <>
            <Dropdown menu={{ items }}>{showProfileContent()}</Dropdown>
            <DownOutlined style={{ marginLeft: '5px' }} />
          </>
        )
        : (
          <div className="login" onClick={() => !isLogin && dispatch(changeIsVisible(true))}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              登录
            </a>
          </div>
        )}
      {isVisible && <Login />}
    </DropdownWrapper>
  )
}
