import styled from 'styled-components';

export const WrapperStyled = styled.div`
  flex: 1;
  width: 400px;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--semi-color-border);
  border-radius: 6px;

  .content {
    padding: 12px;
  }
`;

export const HeaderStyled = styled.div`
  padding: 6px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--semi-color-border);

  .title {
    flex: 1;
    text-align: center;
  }
`;
