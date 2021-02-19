import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: #f5f5f5;
`;

export const Comentary = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-bottom: 25px;

  span {
    flex: 1;
    margin: 0px 15px;
  }

  button {
    width: 70px;
  }
`;

export const Left = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border-right: 1px solid #b8b8b8;

  padding: 4%;

  span {
    font-size: 18px;
    font-weight: bold;
  }

  button {
    height: 32px;
    font-size: 16px;
  }
`;

export const Right = styled.div`
  flex: 1;

  padding: 4%;

  h1 {
    margin-bottom: 25px;
  }
`;
