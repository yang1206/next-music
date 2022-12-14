import styled from 'styled-components'
export const PlaylistWrapper = styled.div`
  border: 1px solid #d9d9d9;

  .main-header {
    display: flex;

    .header-item {
      width: 74px;
      height: 34px;
      padding: 8px 10px;
      line-height: 18px;
      color: #666666;
      background-color: #f2f2f2;
      background-repeat: repeat-x;
      background-position: 0 0;

      &:first-child {
        border-right: 1px solid #dadada;
      }

      &.header-title {
        width: 327px;
        border-right: 1px solid #dadada;
      }

      &.header-singer {
        flex: 1;
        border-right: 1px solid #dadada;
      }

      &.header-time {
        width: 91px;
        border-right: 1px solid #dadada;
      }

      &.header-album {
        width: 210px;
      }
    }
  }

  .main-list {
    .song_item:nth-child(odd) {
      background: #f7f7f7 !important;
    }

    .song_item:nth-child(-n + 3) {
      height: 70px !important;
    }
  }
`
