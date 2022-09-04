import styled from 'styled-components'
import platform from 'public/img/platform.png'
export const LoginWrapper = styled.div`
  display: flex;

  .gap {
    margin-right: 15px;
  }

  .LoginLeft {
    width: 250px;

    .login-content {
      height: 220px;
      border-right: 1px dotted #cccccc;

      .login-bg {
        width: 250px;
        height: 140px;
        margin-bottom: 30px;
        background: url(${platform.src}) no-repeat center;
      }
    }
  }

  .LoginRight {
    padding: 3px 0 3px 39px;
    margin-top: -15px;
  }
`
export const PhoneLoginModal = styled.div`
  display: flex;
  justify-content: center;
`
