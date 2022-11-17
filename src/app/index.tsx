import { FC } from 'react';
import { Divider, Space } from '@douyinfe/semi-ui';

import NestTab from '~/nest-tab';
import ChartPanel from '~/chart-panel';
import MultSelect from '~/mult-select';
import { ChartPanelWrapper } from './styled';
import Flex from '~/flex';

const App: FC = () => (
  <Space vertical style={{ width: '100%' }} align='start' spacing='loose'>
    <Divider align='left'>输入 + 快捷操作</Divider>
    <MultSelect />
    <Divider align='left'>嵌套 Tabs</Divider>
    <NestTab />
    <Divider align='left'>图表 Panel</Divider>
    <ChartPanelWrapper>
      <ChartPanel />
      <ChartPanel />
    </ChartPanelWrapper>
    <Divider align='left'>弹性容器 Flex</Divider>
    <Flex spacing='loose'>
      <Flex>
        <div>Hello</div>
        <div>World</div>
      </Flex>
      <Flex vertical>
        <div>Hello</div>
        <div>World</div>
      </Flex>
    </Flex>
  </Space>
);

export default App;
