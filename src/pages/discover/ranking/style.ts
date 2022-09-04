import styled from 'styled-components'
export const TopListWrapper = styled.div`
  width: 982px;
  margin: 0 auto;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;

  .top-list-content {
    display: flex;

    .TopListLeft {
      width: 240px;
      background: #f9f9f9;

      .top-list-container {
        margin-top: 40px;
      }
    }

    .TopListRight {
      width: 740px;
    }
  }
`
