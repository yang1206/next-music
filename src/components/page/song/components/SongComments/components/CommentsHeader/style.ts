import styled from 'styled-components'
export const CommentsHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 33px;
  padding: 0 10px 0 6px;
  line-height: 33px;
  background-position: -225px -156px;
  border-bottom: 2px solid #c10d0c;
  .CommentsHeaderLeft {
    display: flex;

    .hot-title {
      display: flex;
      margin-right: 18px;
      margin-bottom: 5px;

      a {
        color: #333333;

        &:hover {
          text-decoration: none;
        }
      }
    }

    span {
      line-height: 40px;
    }
  }
`
