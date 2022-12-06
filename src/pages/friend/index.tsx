import React from 'react'
import { FriendWrapper } from 'src/styles/page/friend'
const Friend: React.FC = () => {
  return (
    <div>
      <FriendWrapper className="w980">
        <div className="show-no-login">
          <div className="my_music inner">
            <h2>登录网易云音乐</h2>
            <div className="my_music btn-login">立即登录</div>
          </div>
        </div>
      </FriendWrapper>
    </div>
  )
}
export default Friend
