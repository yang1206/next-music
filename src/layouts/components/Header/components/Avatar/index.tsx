import { Dropdown, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { DropdownWrapper } from './style'
import { clearLoginState } from '@/utils/secretKey'
import { useAppDispatch, useAppSelector } from '@/hooks/useStore'
import { changeIsVisible, selectIsVisible, selectLoginState, selectProfile } from '@/store/slice/Login'
import Login from '@/components/common/Login'
export default function Avatar() {
  const dispatch = useAppDispatch()
  const isLogin = useAppSelector(selectLoginState).data
  const isVisible = useAppSelector(selectIsVisible).data
  const profile = useAppSelector(selectProfile).data

  // 用户下拉JSX
  // 登陆后
  const profileDownMenu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a rel="noopener noreferrer" href="/user">
              {profile.nickname}
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a rel="noopener noreferrer" href="/user">
              我的主页
            </a>
          ),
        },
        {
          key: '3',
          className: 'logout',
          danger: true,
          label: '退出登录',
          onClick: () => clearLoginState(),
        },
      ]}
    ></Menu>
  )
  const showProfileContent = () => {
    return <img src={profile.avatarUrl} alt="" className="profile-img" />
  }
  return (
    <DropdownWrapper>
      {isLogin
        ? (
        <>
          <Dropdown overlay={profileDownMenu}>{showProfileContent()}</Dropdown>
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
