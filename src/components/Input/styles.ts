import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  padding-left: 10px;

  width: 340px;
  height: 56px;

  border: 2px solid #232129;
  border-radius: 10px;
  font-size: 16px;

  svg {
    margin-right: 10px;
    color: #666360;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #fff;
    padding-right: 10px;

    &::placeholder {
      color: #666360;
    }
  }

  & + div {
    margin-top: 5px;
  }
`;
