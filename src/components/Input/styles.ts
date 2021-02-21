import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    display: block;

    margin-top: 30px;
    padding-left: 10px;

    width: 340px;
    height: 56px;
    background: #232129;
    border: 2px solid #232129;
    border-radius: 10px;
    font-size: 16px;
    color: #f4ede8;
    padding: 0 12px;

    &::placeholder {
      color: #666360;
    }

    & + input {
      margin-top: 7px;
    }
  }
`;
