import styled from 'styled-components'
export const SearchWrapper = styled.div`
  position: relative;

  /* 搜索框 */

  .search {
    width: 221px;
    height: 32px;
    border-radius: 16px;

    input {
      /* stylelint-disable-next-line string-quotes */
      font-family: '微软雅黑';
      font-size: 14px;

      &::placeholder {
        font-size: 12px;
      }
    }
  }

  /* icons */

  .icons-wrapper {
    display: flex;

    .ctrl-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25px;
      height: 20px;
      padding-bottom: 2px;
      margin-right: 0.5em;
      color: rgb(150 159 175);
      background: linear-gradient(-225deg, #d5dbe4, #f8f8f8);
      border-radius: 3px;
      box-shadow: inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #ffffff, 0 1px 2px 1px rgb(30 35 90 / 40%);
    }

    .k-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25px;
      height: 20px;
      padding-bottom: 2px;
      margin-right: 0.6em;
      color: #969faf;
      background: linear-gradient(-225deg, #d5dbe4, #f8f8f8);
      border-radius: 3px;
      box-shadow: inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #ffffff, 0 1px 2px 1px rgb(30 35 90 / 40%);
    }
  }

  /* 下拉框 */

  .down-slider {
    position: absolute;
    top: 36px;
    right: 0;
    left: 0;
    z-index: 999;
    width: 221px;
    background: #ffffff;
    border: 1px solid #bebebe;
    border-radius: 4px;
    box-shadow: 0 4px 7px #555555;

    .search-header {
      height: 35px;

      .discover {
        display: inline-block;
        padding-top: 10px;
        padding-left: 10px;
      }
    }

    .list {
      display: flex;
      border: 1px solid rgb(183 183 187);

      .zuo {
        width: 65px;
        padding-top: 10px;
        border-bottom: none;

        .song {
          margin-left: 8px;
          color: #cccccc;
        }
      }

      .main {
        display: inline-block;
        font-size: 13px;
        line-height: 28px;

        .item {
          width: 168px;
          height: 35px;
          overflow: hidden;
          line-height: 35px;
          color: #000000;
          text-indent: 8px;
          text-overflow: ellipsis;
          white-space: nowrap;
          cursor: pointer;

          &:hover {
            color: red;
            background-color: #ecf0f1;
            border-radius: 5%;
          }

          &.active {
            color: red;
            background-color: #ecf0f1;
          }
        }
      }

      span.blue {
        color: #7ab3dd;
      }
    }
  }
  .center {
    width: 75px;
    height: 32px;
    margin: 0 13px;
    line-height: 32px;
    text-align: center;
    background-color: transparent;
    border: 1px solid #666666;
    border-radius: 16px;

    &:hover {
      color: #ffffff;
      cursor: pointer;
      border-color: #ffffff;
    }
  }
`
