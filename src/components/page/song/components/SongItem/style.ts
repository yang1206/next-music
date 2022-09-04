import styled from 'styled-components'
export const SongItemWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 30px;

  .song-item {
    line-height: 18px;
    text-align: left;
  }

  .song-info {
    display: flex;
    justify-content: space-between;
    width: 230px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    .singer-song {
      .text-nowrap {
        font-size: 12px;
        color: #333333 !important;
      }

      .singer {
        font-size: 12px;
        color: #999999 !important;
      }
    }

    .font-active {
      margin-right: 8px;
      font-size: 15px;
      cursor: pointer;
    }

    .font-active:active {
      color: #d31111;
    }

    .btn {
      width: 17px;
      height: 17px;
      margin-left: 8px;
      cursor: pointer;

      &.addto {
        position: relative;
        top: 2px;
        background-position: 0 -700px;
      }
    }

    .left-info {
      display: flex;
      overflow: hidden;
    }

    .left-info > a {
      display: inline-block;
      width: 130px;
    }
  }

  .duration {
    width: 91px;
  }
`
