import styled from 'styled-components'
export const MineWrapper = styled.div`
  display: block;
  min-height: 700px;
  background-color: #ffffff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;

  .inner {
    width: 807px;
    height: 372px;
    margin: 0 auto;
    background-position: 0 104px;

    h2 {
      text-indent: -9999px;
    }

    .btn-login {
      display: block;
      width: 167px;
      height: 45px;
      margin: 278px 0 0 482px;
      text-indent: -9999px;
      cursor: pointer;
    }

    .btn-login:hover {
      background-position: 0 -278px;
    }
  }
`
