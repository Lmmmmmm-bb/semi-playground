import { FC } from 'react';
import { Tabs, TabPane } from '@douyinfe/semi-ui';

import { DocsWrapprStyled, SemiTabsStyled, WrapperStyled } from './styled';

const NestTab: FC = () => (
  <WrapperStyled>
    <Tabs size='small'>
      <TabPane tab='文档' itemKey='1'>
        <DocsWrapprStyled>
          <SemiTabsStyled type='button'>
            <TabPane tab='监控' itemKey='1.1'>
              监控
            </TabPane>
            <TabPane tab='图表' itemKey='1.2'>
              图表
            </TabPane>
          </SemiTabsStyled>
        </DocsWrapprStyled>
      </TabPane>
      <TabPane tab='快速起步' itemKey='2'>
        <h3>快速起步</h3>
      </TabPane>
    </Tabs>
  </WrapperStyled>
);

export default NestTab;
