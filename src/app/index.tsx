import { FC } from 'react';
import { Divider, Space } from '@douyinfe/semi-ui';

import MultSelect from '~/mult-select';
import NestTab from '~/nest-tab';

const App: FC = () => (
  <Space vertical style={{ width: '100%' }} align='start' spacing='loose'>
    <Divider align='left'>输入 + 快捷操作</Divider>
    <MultSelect />
    <Divider align='left'>嵌套 Tabs</Divider>
    <NestTab />
  </Space>
);

export default App;
