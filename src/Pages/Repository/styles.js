import styled from 'styled-components';

export const Container = styled.div``;

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueLIst = styled.ul`
  margin-top: 15px;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50px;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;
        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }
        span {
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }
      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;

export const FilterList = styled.div`
  border-top: 1px solid #eee;
  padding-top: 15px;
  margin-top: 30px;

  select {
    border: 1.3px solid #eee;
    background: #fff;
    border-radius: 4px;
    padding: 2px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  flex: 1;
  margin: 15px 0;
  align-items: center;
  justify-content: space-between;

  span {
    color: #999;
  }

  button {
    width: 80px;
    padding: 5px 0;
    font-weight: 600;
    background: #7159c1;
    border-radius: 5px;
    border: 1.5px solid #7159c1;
    color: #fff;
    transition: 0.2s;
  }

  button:hover {
    background: #4e2ac6;
    color: #fff;
    border: 1.5px solid #4e2ac6;
  }
`;

export const BtnReturn = styled.button`
  cursor: ${(props) => props.cursor};
`;
