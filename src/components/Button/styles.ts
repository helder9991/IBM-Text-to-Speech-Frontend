import styled from 'styled-components';

export const Container = styled.button`
  height: 25px;
  background-color: ${props => (props.disabled ? '#999999' : '#dadada')};
  margin: 10px 0px;
  border-radius: 5px;
  border: 1px solid #888888;
  border-width: 1px 1px 2px 1px;

  color: #323232;
  font-size: 13px;
  font-weight: bold;

  &:hover {
    background-color: #999999;
  }
`;
