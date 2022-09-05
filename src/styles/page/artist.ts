import styled from 'styled-components'
export const ArtistDetailWrapper = styled.div`
  display: block;
  min-height: 700px;
  background-color: #ffffff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;

  .artist_info {
    .header {
      display: flex;
      flex-direction: column;
      width: 90%;
      margin: 0 auto;

      .name {
        display: flex;
        align-items: flex-end;
        margin: 20px 0 3px;

        .realName {
          font-size: 26px;
        }

        .alias {
          margin-left: 10px;
          font-size: 13px;
          color: #9f9b99;
        }
      }

      img {
        width: 100%;
        height: 300px;
        border-top: 1px solid #999999;
        object-fit: cover;
      }
    }

    .main {
      width: 90%;
      margin: 0 auto;

      .card-container p {
        margin: 0;
      }

      .card-container > .ant-tabs-card .ant-tabs-content {
        margin-top: -16px;
      }

      .card-container > .ant-tabs-card > .ant-tabs-nav::before {
        display: none;
      }

      .ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab {
        margin-left: 0;
      }

      .ant-tabs-tab:hover {
        color: #d13f38;
        border-top: 2px solid #d13030;
      }

      .card-container > .ant-tabs-card .ant-tabs-tab,
      [data-theme='compact'] .card-container > .ant-tabs-card .ant-tabs-tab {
        display: flex;
        justify-content: center;
        width: 220px;
        background: #f5f5f5;
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
        justify-content: space-between;
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

      .card-container {
        .Album-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 30px 0;

          .HotAlbum-item {
            margin: 25px 10px;
          }
        }

        .mv {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .desc {
          margin: 10px;

          .item {
            margin: 20px 5px;

            p {
              font-size: 18px;
              font-weight: 600;
            }

            span {
              font-size: 12px;
              color: #666666;
            }
          }
        }
      }
    }
  }
`
