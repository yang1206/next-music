import styled from 'styled-components'
export const PaginationWrapper = styled.div`
  .pagination {
    margin: 40px 0;
    text-align: center;

    .control {
      width: 69px;
      height: 24px;
      margin: 0 5px;
      line-height: 22px;
      color: #333333;
      text-align: center;
      border: 1px solid #cccccc;
      border-radius: 2px;

      &:disabled {
        color: #999999;
      }
    }

    .ant-pagination-item {
      margin: 0 5px;
      border: 1px solid #cccccc !important;
      border-radius: 3px;

      a {
        font-size: 12px;
      }

      &.ant-pagination-item-active {
        background-color: #c20c0c;
        border-color: #a2161b;

        a {
          color: #ffffff;
        }
      }
    }
  }
`
