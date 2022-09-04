import styled from 'styled-components'
export const RcmHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 33px;
  padding: 0 10px 4px 34px;
  margin: 10px;
  background-position: -225px -156px !important;
  border-bottom: 2px solid #c10d0c;

  .left {
    display: flex;
    align-items: center;
    line-height: 33px;

    .title {
      margin-right: 20px;
      font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
      font-size: 20px;
      line-height: 33px;
      white-space: nowrap;
    }

    .keyword {
      display: flex;
      flex-wrap: nowrap;
      font-size: 12px;
      color: #666666;
      white-space: nowrap;

      .item {
        .divider {
          margin: 0 15px;
          color: #cccccc;
        }
      }

      .item:last-child {
        .divider {
          display: none;
        }
      }
    }
  }

  .right {
    display: flex;
    align-items: center;

    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`
