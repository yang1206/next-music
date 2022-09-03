import styled from 'styled-components'
export const AppFooterWrapper = styled.div`
  height: 172px;
  padding-top: 15px;
  line-height: 24px;
  color: #666666;
  background-color: #f2f2f2;
  border-top: 1px solid #d3d3d3;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .link {
    a {
      color: #999999;
    }

    .line {
      margin: 0 10px;
      color: #999999;
    }
  }

  .copyright {
    span {
      margin-right: 15px;
    }
  }

  .left {
    padding-top: 15px;
    line-height: 24px;

    a {
      color: #999999;
    }

    .link {
      .line {
        margin: 0 10px;
        color: #999999;
      }
    }

    .copyright {
      span {
        margin-right: 15px;
      }
    }
  }
`
