import styled from 'styled-components'
export const PlaylistItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 28px;
  padding-left: 15px;
  margin-top: 2px;
  cursor: pointer;

  &:hover {
    color: #ffffff;
    background-color: rgb(0 0 0 / 40%);
  }

  &.active {
    background-color: rgb(0 0 0 / 40%);
  }

  .song-name {
    width: 250px;
    height: 28px;
    line-height: 28px;
    text-align: left;
    text-indent: -18px;
  }

  .control-and-singer {
    display: flex;

    .anticon-delete,
    .anticon-download,
    .anticon-like,
    .anticon-github {
      margin: 2px 6px 0;
      font-size: 14px;
      color: #cccccc;
      opacity: 0;
    }

    .anticon-delete:hover,
    .anticon-download:hover,
    span:hover,
    .anticon-like:hover,
    .anticon-github:hover {
      color: #ffffff;
    }

    span {
      margin-left: 4px;
    }
  }

  &:hover .anticon-delete,
  &:hover .anticon-download,
  &:hover .anticon-like,
  &:hover .anticon-github {
    opacity: 1;
  }
`
