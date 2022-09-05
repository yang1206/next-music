import styled from 'styled-components'
export const AllAlbumWrapper = styled.div`
  width: 982px;
  margin: 0 auto;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;

  .Artist-list-content {
    display: flex;

    .ArtistListLeft {
      width: 180px;
      background: #f9f9f9;

      .Artist-list-container {
        margin-top: 40px;
      }
    }

    .ArtistListRight {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 802px;
      padding: 5px;
      margin: 0 auto;
      background: #f0eded;

      .artistList {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        margin-top: 20px;
        margin-left: 40px;
      }
    }
  }
`
