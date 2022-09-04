import styled from 'styled-components'
export const AlbumWrapper = styled.div`
  .album-image {
    position: relative;
    overflow: hidden;

    img {
      object-fit: contain;
    }

    .cover {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      text-indent: -9999px;
    }
  }

  .album-info {
    font-size: 12px;
    text-align: left;

    .name {
      display: block;
      overflow: hidden;
      color: #000000;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .artist {
      display: block;
      color: #666666;
    }
  }
`
