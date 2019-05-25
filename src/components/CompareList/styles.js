import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 50px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  margin: 0 15px 10px 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 7px 20px 1px;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n - 1) {
        background: #f5f5f5;
      }
    }
  }

  div.buttons-container {
    padding: 10px 20px;
    display: flex;
    justify-content: space-around;

    button {
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 12px;
      font-weight: bold;
      box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
      i {
        margin-right: 3px;
      }
      &:nth-child(2n) {
        border: 1px solid #c11927;
        color: #c11927;
        &:hover {
          background: #aa1622;
          color: #fff;
        }
      }
      &:nth-child(2n - 1) {
        border: 1px solid #116088;
        color: #116088;
        &:hover {
          background: #0e5071;
          color: #fff;
        }
      }
    }
  }
`;
