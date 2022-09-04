import styled from 'styled-components'
export const ArtistCategoryWrapper = styled.div`
  width: 180px;

  .category {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 10px;

    .label {
      margin-left: 30px;
      font-family: 'Microsoft Yahei';
      font-size: 16px;
      font-weight: 600;
    }

    .info {
      display: flex;
      flex-direction: column;
      margin-top: 10px;

      .categoryItem {
        margin: 5px;
        text-align: center;
      }

      .categoryItem:active,
      .categoryItem:focus {
        color: #c20c0c;
        border: 1px solid #cccccc;
      }
    }

    .info::after {
      display: block;
      height: 0;
      visibility: hidden;
      content: '.';
    }
  }
`
