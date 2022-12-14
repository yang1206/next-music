import styled from 'styled-components'
export const SongItemWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 30px;

  .song-item {
    padding: 6px 10px;
    line-height: 18px;
    text-align: left;
  }

  .rank-count {
    width: 70px;
    padding-left: 25px;
    color: #999999;
  }

  .song-info {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left-info {
      line-height: 100%;
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

    .left-info > a {
      display: inline-block;
      width: 190px;
    }
  }

  .duration {
    width: 91px;
  }

  .singer {
    flex: 1;
  }

  .album {
    width: 210px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    word-wrap: break-word;
    white-space: nowrap;
  }
`
