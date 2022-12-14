import styled from 'styled-components'
export const SingleSongItemWrapper = styled.div`
  display: flex;
  padding: 10px 10px 8px 18px;
  border: 1px solid #ffffff;

  &:hover {
    background: #f2f2f2;
    border: 1px solid #e1e1e1;
  }

  .song-name {
    display: flex;
    align-items: center;
    justify-items: center;
    width: 370px;

    .anticon-play-circle {
      font-size: 18px;
      color: #b2b2b2;

      &:hover {
        color: #666666;
      }
    }

    & > em {
      margin-left: 5px;
      color: #0c73c2;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
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
  }

  .singer {
    width: 144px;
    margin-left: 125px;
  }

  .album {
    width: 156px;
    margin-right: 12px;
  }

  &:nth-child(even) {
    background: #f7f7f7;
    border-color: #f7f7f7;

    &:hover {
      background: #f2f2f2;
      border: 1px solid #e1e1e1;
    }
  }
`
