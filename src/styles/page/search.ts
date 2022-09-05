import styled from 'styled-components'
export const SearchWrapper = styled.div`
  .content {
    padding: 40px;
    margin: 0 auto;
    background-color: #ffffff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;

    .search-wrapper {
      display: flex;
      justify-content: center;

      .ant-input-search {
        height: 42px;
        border-color: #c9c9c9;
        border-radius: 8px;
      }
    }

    .search-content {
      .search-info {
        margin: 28px 0 17px;
        color: #999999;

        .music-amount {
          color: #c20c0c;
        }
      }

      .card-container p {
        margin: 0;
      }

      .card-container > .ant-tabs-card .ant-tabs-content {
        margin-top: -16px;
      }

      .card-container > .ant-tabs-card > .ant-tabs-nav::before {
        display: none;
      }

      .ant-tabs-tab:hover {
        color: #d13f38;
        border-top: 2px solid #d13030;
      }

      .ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab {
        margin-left: 0;
      }

      .card-container > .ant-tabs-card .ant-tabs-tab,
      [data-theme='compact'] .card-container > .ant-tabs-card .ant-tabs-tab {
        display: flex;
        justify-content: center;
        width: 120px;
        background: #f5f5f5;
        border: 2px solid #cccccc;
        border-color: transparent;
      }

      .card-container > .ant-tabs-card .ant-tabs-tab-active,
      [data-theme='compact'] .card-container > .ant-tabs-card .ant-tabs-tab-active {
        background: #fafafa;
        border-top: 2px solid #d13030;
        border-right: 1px solid #cccccc;
        border-left: 1px solid #cccccc;
        border-radius: none;
      }

      .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
        font-weight: 500;
        color: #363636 !important;
      }

      .card-container .SingleSongWrapper {
        height: 100%;
        overflow: hidden;
      }

      .card-container .SingerWrapper {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
      }

      .card-container .SearchAlbum {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin-top: 20px;

        .albumItem {
          margin: 20px;
        }
      }

      #components-tabs-demo-card-top .code-box-demo {
        padding: 24px;
        overflow: hidden;
        background: #f5f5f5;
      }

      [data-theme='compact'] .card-container > .ant-tabs-card .ant-tabs-content {
        height: 120px;
        margin-top: -8px;
      }
    }
  }
`
