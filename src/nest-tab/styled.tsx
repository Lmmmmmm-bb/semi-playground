import styled from 'styled-components';
import { Tabs } from '@douyinfe/semi-ui';
import { TabsProps } from '@douyinfe/semi-ui/lib/es/tabs';

export const WrapperStyled = styled.div`
  width: 100%;
`;

export const DocsWrapprStyled = styled.div`
  margin-top: 8px;
`;

export const SemiTabsStyled = styled(Tabs)<TabsProps>`
  .semi-tabs-bar-button {
    display: flex;
    justify-content: center;
  }
`;
